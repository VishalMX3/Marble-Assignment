import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import { ChartTooltip } from "./ChartTooltip";
import { IChartDatum, IChartDatum2 } from "../../interfaces";

type TResponsiveLineChartProps = {
  kpi: string;
  data: IChartDatum2[];
  colors: {
    stroke: string;
    fill: string;
  };
};

export const ResponsiveLineChart = ({
  kpi,
  data,
  colors,
}: TResponsiveLineChartProps) => {
  return (
    <ResponsiveContainer height={150}>
      <LineChart
        height={150}
        data={data}
        margin={{
          top: 5,
          right: 25,
          left: -25,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={false} strokeDasharray="0 0" />
        <XAxis
          dataKey="date"
          tickCount={data?.length ?? 0}
          tick={{
            stroke: "rgba(103, 103, 103, 1)",
            strokeWidth: 0.01,
            fontSize: "12px",
          }}
          tickLine={{
            stroke: "rgba(245, 245, 245, 1)",
            strokeWidth: 0.1,
            opacity: 0.5,
          }}
          style={{ stroke: "#dad8d8" }}
        />
        <YAxis
          // tickCount={4}
          tick={{
            stroke: "rgba(112, 112, 122, 1)",
            strokeWidth: 0.01,
            fontSize: "12px",
          }}
          domain={[0, "dataMax + 10"]}
          tickLine={{
            stroke: "rgba(245, 245, 245, 1)",
            strokeWidth: 1,
            opacity: 0.5,
          }}
          axisLine={{ stroke: "white" }}
          interval={1}
        />
        <Tooltip
          content={<ChartTooltip kpi={kpi} colors={colors} />}
          wrapperStyle={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
          }}
        />

        <Line
          type="monotone"
          dataKey="currentValue"
          stroke={colors?.stroke}
          strokeWidth={2}
          fill={colors?.fill}
          dot={false}
        />

        <Line
          type="monotone"
          dataKey="previousValue"
          stroke="lightblue"
          strokeDasharray="5 5"
          strokeWidth={2}
          fill="rgba(173, 216, 230, 0.2)"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
