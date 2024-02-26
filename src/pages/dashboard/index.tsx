import React, { useMemo } from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import { ResponsiveAreaChart } from "../../components/dashboard/ResponsiveAreaChart";
import { TabView } from "../../components/dashboard/TabView";
import { IChartDatum, TTab } from "../../interfaces";
import dummyTotalOrders from "../../data";

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
      return d?.data?.data?.map((item: IChartDatum) => ({
        date: new Intl.DateTimeFormat("en-US", {
          month: "short",
          year: "numeric",
        }).format(new Date(item.date)),
        value: item?.value,
      }));
    }, [d]);
  };

  const memoizedRevenueData = useMemoizedChartData(dailyRevenue);
  const memoizedNewCustomersData = useMemoizedChartData(newCustomers);
  const memoizedDummyTotalOrdersData = useMemoizedChartData(dummyTotalOrders);

  const tabs: TTab[] = [
    {
      id: 1,
      label: "Daily Revenue",
      content: (
        <ResponsiveAreaChart
          kpi="Daily revenue"
          data={memoizedRevenueData}
          colors={{
            stroke: "rgb(54, 162, 235)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },

    {
      id: 2,
      label: "New Customers",
      content: (
        <ResponsiveAreaChart
          kpi="New customers"
          data={memoizedNewCustomersData}
          colors={{
            stroke: "rgb(76, 175, 80)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },

    {
      id: 3,
      label: "Total Orders",
      content: (
        <ResponsiveAreaChart
          kpi="Total Prders"
          data={memoizedDummyTotalOrdersData}
          colors={{
            stroke: "rgb(76, 175, 80)",
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
