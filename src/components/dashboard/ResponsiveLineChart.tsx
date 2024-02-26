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
    <ResponsiveContainer height={400}>
      <LineChart
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="0 0" />
        <XAxis
          dataKey="date"
          tickCount={data?.length ?? 0}
          tick={{
            stroke: "light-grey",
            strokeWidth: 0.5,
            fontSize: "12px",
          }}
        />
        <YAxis
          tickCount={13}
          tick={{
            stroke: "light-grey",
            strokeWidth: 0.5,
            fontSize: "12px",
          }}
          interval="preserveStartEnd"
          domain={[0, "dataMax + 10"]}
        />
        <Tooltip
          content={<ChartTooltip kpi={kpi} colors={colors} />}
          wrapperStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            border: "0 solid #000",
            borderRadius: "10px",
          }}
        />
        <Line
          type="monotone"
          dataKey="currentValue"
          stroke={colors?.stroke}
          strokeWidth={3}
          fill={colors?.fill}
          dot={{
            stroke: colors?.stroke,
            strokeWidth: 3,
          }}
        />

        <Line
          type="monotone"
          dataKey="previousValue"
          data={data}
          stroke={colors.stroke}
          strokeWidth={3}
          fill={colors.fill}
          dot={{
            stroke: colors.stroke,
            strokeWidth: 3,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
