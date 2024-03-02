import React, { useMemo } from "react";
import { ResponsiveLineChart } from "../../components/dashboard/ResponsiveLineChart";
import { TabView } from "../../components/dashboard/TabView";
import { IChartDatum, TTab } from "../../interfaces";
import {
  averageOrderValueMockData,
  averageOrderValueMockDataPrev,
  totalOrdersMockData,
  totalOrdersMockDataPrev,
  onlineStoreSessionsMockData,
  onlineStoreSessionsMockDataPrev,
  grossSalesMockData,
  grossSalesMockDataPrev,
} from "../../data";

export const Dashboard: React.FC = () => {
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
  const mergeData = (currentYearData: any, previousYearData: any) => {
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
  const mergedAverageOrderValueMockData = mergeData(
    useMemoizedChartData(averageOrderValueMockData),
    useMemoizedChartData(averageOrderValueMockDataPrev)
  );
  const mergedTotalOrdersMockData = mergeData(
    useMemoizedChartData(totalOrdersMockData),
    useMemoizedChartData(totalOrdersMockDataPrev)
  );
  const mergedOnlineStoreSessionsMockData = mergeData(
    useMemoizedChartData(onlineStoreSessionsMockData),
    useMemoizedChartData(onlineStoreSessionsMockDataPrev)
  );
  const mergedGrossSalesMockData = mergeData(
    useMemoizedChartData(grossSalesMockData),
    useMemoizedChartData(grossSalesMockDataPrev)
  );

  const tabs: TTab[] = [
    {
      id: 1,
      label: "Online Store Sessions",
      desc: "Your online store’s traffic volume, shown in sessions.",
      data: mergedOnlineStoreSessionsMockData,
      content: (
        <ResponsiveLineChart
          kpi="Online Store Sessions"
          data={mergedOnlineStoreSessionsMockData}
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
      desc: "Shows the total orders in the given time period.",
      data: mergedTotalOrdersMockData,
      content: (
        <ResponsiveLineChart
          kpi="Total Orders"
          data={mergedTotalOrdersMockData}
          colors={{
            stroke: "rgb(7, 152, 241)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },
    {
      id: 3,
      label: "Average Order Value",
      desc: "Shows the average order value in the given time period.",
      data: mergedAverageOrderValueMockData,
      content: (
        <ResponsiveLineChart
          kpi="Average order value"
          data={mergedAverageOrderValueMockData}
          colors={{
            stroke: "rgb(7, 152, 241)",
            fill: "rgba(54, 162, 235, 0.2)",
          }}
        />
      ),
    },

    {
      id: 4,
      label: "Gross Sales",
      desc: "Shows the average gross sales in the given time period.",
      data: mergedGrossSalesMockData,
      content: (
        <ResponsiveLineChart
          kpi="Gross Sales"
          data={mergedGrossSalesMockData}
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
      <div className="bg-slate-100 w-[100vw] h-[100vh] flex justify-center">
        <TabView tabs={tabs} />
      </div>
    </>
  );
};
