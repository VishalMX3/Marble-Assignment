import React, { useMemo } from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import { ResponsiveLineChart } from "../../components/dashboard/ResponsiveLineChart";
import { TabView } from "../../components/dashboard/TabView";
import { IChartDatum, TTab } from "../../interfaces";
import Stats from "../../components/dashboard/Stats";
import {
  conversionRateMockData,
  conversionRateMockDataPrev,
  totalOrdersMockData,
  totalOrdersMockDataPrev,
  onlineStoreSessionsMockData,
  onlineStoreSessionsMockDataPrev,
  grossSalesMockData,
  grossSalesMockDataPrev,
} from "../../data";

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
  const mergedTotalOrdersMockData = mergeTotalOrdersData(
    useMemoizedChartData(totalOrdersMockData),
    useMemoizedChartData(totalOrdersMockDataPrev)
  );
  const mergedOnlineStoreSessionsMockData = mergeTotalOrdersData(
    useMemoizedChartData(onlineStoreSessionsMockData),
    useMemoizedChartData(onlineStoreSessionsMockDataPrev)
  );
  const mergedGrossSalesMockData = mergeTotalOrdersData(
    useMemoizedChartData(grossSalesMockData),
    useMemoizedChartData(grossSalesMockDataPrev)
  );

  const tabs: TTab[] = [
    {
      id: 1,
      label: "Conversion Rate",
      data: mergedConversionRateMockData,
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
    {
      id: 2,
      label: "Total Orders",
      data: mergedTotalOrdersMockData,
      content: (
        <ResponsiveLineChart
          kpi="Total Orders"
          data={mergedTotalOrdersMockData}
          colors={{
            stroke: "rgb(0, 207, 28)",
            fill: "rgba(7, 163, 85, 0.2)",
          }}
        />
      ),
    },
    {
      id: 3,
      label: "Online Store Sessions",
      data: mergedOnlineStoreSessionsMockData,
      content: (
        <ResponsiveLineChart
          kpi="Online Store Sessions"
          data={mergedOnlineStoreSessionsMockData}
          colors={{
            stroke: "rgb(210, 217, 0)",
            fill: "rgba(102, 150, 0, 0.2)",
          }}
        />
      ),
    },
    {
      id: 4,
      label: "Gross Sales",
      data: mergedGrossSalesMockData,
      content: (
        <ResponsiveLineChart
          kpi="Gross Sales"
          data={mergedGrossSalesMockData}
          colors={{
            stroke: "rgb(217, 0, 0)",
            fill: "rgba(150, 27, 0, 0.2)",
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
