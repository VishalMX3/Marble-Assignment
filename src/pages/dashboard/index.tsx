import React, { useMemo } from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import { ResponsiveLineChart } from "../../components/dashboard/ResponsiveLineChart";
import { TabView } from "../../components/dashboard/TabView";
import { IChartDatum, TTab } from "../../interfaces";
import { dummyTotalOrders, dummyTotalOrdersPrev } from "../../data";

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
  //   {
  //     field: "step",
  //     operator: "eq",
  //     value: 2, // Step by two months
  //   },
];

export const Dashboard: React.FC = () => {
  //   const { data: dailyRevenue } = useList<IChartDatum>({
  //     resource: "dailyRevenue",
  //     filters,
  //   });

  //   const { data: newCustomers } = useList<IChartDatum>({
  //     resource: "newCustomers",
  //     filters,
  //   });

  const useMemoizedChartData = (d: any) => {
    return useMemo(() => {
      return d?.data?.data?.map((item: IChartDatum) => ({
        date: new Intl.DateTimeFormat("en-US", {
          month: "short",
          year: "numeric",
          day: "numeric",
        }).format(new Date(item.date)),
        value: item?.value,
      }));
    }, [d]);
  };

  const memoizedDummyTotalOrdersData = useMemoizedChartData(dummyTotalOrders);

  const memoizedDummyTotalOrdersDataPrev =
    useMemoizedChartData(dummyTotalOrdersPrev);

  // Function to merge total orders data for current year and previous year
  const mergeTotalOrdersData = (
    currentYearData: any,
    previousYearData: any
  ) => {
    // Assuming both arrays are sorted by date
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

  // Merge current year's and previous year's total orders data
  const mergedTotalOrdersData = mergeTotalOrdersData(
    memoizedDummyTotalOrdersData,
    memoizedDummyTotalOrdersDataPrev
  );

  console.log(mergedTotalOrdersData);

  const tabs: TTab[] = [
    {
      id: 1,
      label: "Total Orders",
      content: (
        <ResponsiveLineChart
          kpi="Total Orders"
          data={mergedTotalOrdersData}
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
      <TabView tabs={tabs} />
    </>
  );
};
