import React, { useMemo } from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import { ResponsiveLineChart } from "../../components/dashboard/ResponsiveLineChart";
import { TabView } from "../../components/dashboard/TabView";
import { IChartDatum, TTab } from "../../interfaces";
import Stats from "../../components/dashboard/Stats";
import { generateMockData } from "../../mockData";

const conversionRateMockData = generateMockData(
  1,
  50,
  new Date("2023-01-01"),
  new Date("2023-01-15")
);
const conversionRateMockDataPrev = generateMockData(
  3,
  80,
  new Date("2022-01-01"),
  new Date("2022-01-15")
);

const filters: CrudFilter[] = [
  {
    field: "start",
    operator: "eq",
    value: dayjs().subtract(1, "year").startOf("month"),
  },
  {
    field: "end",
    operator: "eq",
    value: dayjs().endOf("month"),
  },
];

export const Dashboard: React.FC = () => {
  const { data: dailyRevenue } = useList<IChartDatum>({
    resource: "dailyRevenue",
    filters,
  });

  const { data: newCustomers } = useList<IChartDatum>({
    resource: "newCustomers",
    filters,
  });

  const useMemoizedChartData = (d: any) => {
    return useMemo(() => {
      return d?.data?.map((item: IChartDatum) => ({
        date: new Intl.DateTimeFormat("en-US", {
          month: "short",
          year: "numeric",
          day: "numeric",
        }).format(new Date(item.date)),
        value: item?.value,
      }));
    }, [d]);
  };

  // Function to merge total orders data for current year and previous year
  const mergeTotalOrdersData = (
    currentYearData: any,
    previousYearData: any
  ) => {
    // Assuming both arrays are sorted by date and start and end from same date
    const mergedData = [];
    for (let i = 0; i < currentYearData.length; i++) {
      mergedData.push({
        date: currentYearData[i].date,
        currentValue: currentYearData[i].value,
        previousValue: previousYearData[i].value,
      });
    }
    return mergedData;
  };

  // Merge current year's and previous year's total data
  const mergedConversionRateMockData = mergeTotalOrdersData(
    useMemoizedChartData(conversionRateMockData),
    useMemoizedChartData(conversionRateMockDataPrev)
  );

  const tabs: TTab[] = [
    {
      id: 1,
      label: "Conversion Rate",
      content: (
        <ResponsiveLineChart
          kpi="Conversion Rate"
          data={mergedConversionRateMockData}
          colors={{
            stroke: "rgb(7, 152, 241)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },
  ];

  return (
    <>
      <Stats dailyRevenue={dailyRevenue} newCustomers={newCustomers} />
      <TabView tabs={tabs} />
    </>
  );
};
