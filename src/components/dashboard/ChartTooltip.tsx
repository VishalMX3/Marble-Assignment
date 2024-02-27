import React from "react";

export const ChartTooltip = ({
  active,
  payload,
  label,
  coordinate,
  colors,
  kpi,
}: any) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;

    const tooltipStyle = {
      left: coordinate.x, // Adjust positioning
      top: coordinate.y, // Adjust positioning
    };

    return (
      <div
        className="p-5 flex flex-col items-start gap-5 bg-white shadow-md rounded-lg"
        style={tooltipStyle}
      >
        <p className="text-xs flex items-center justify-evenly">
          <span
            className="mr-1 inline-block"
            style={{
              width: "20px",
              height: "1px",
              border: `2px solid ${colors?.stroke}`,
              backgroundColor: colors?.fill,
            }}
          >
            &nbsp;&nbsp;
          </span>
          {`${dataPoint.date}: ${dataPoint.currentValue}`}
        </p>

        <p className="text-xs flex items-center justify-evenly">
          <span
            className="mr-1 inline-block"
            style={{
              width: "3.9px",
              height: "1px",
              border: "2px solid lightblue",
              backgroundColor: "rgba(173, 216, 230, 0.2)",
            }}
          >
            &nbsp;&nbsp;
          </span>
          <span
            className="mr-1 inline-block"
            style={{
              width: "3.9px",
              height: "1px",
              border: "2px solid lightblue",
              backgroundColor: "rgba(173, 216, 230, 0.2)",
            }}
          >
            &nbsp;&nbsp;
          </span>
          <span
            className="mr-1 inline-block"
            style={{
              width: "3.9px",
              height: "1px",
              border: "2px solid lightblue",
              backgroundColor: "rgba(173, 216, 230, 0.2)",
            }}
          >
            &nbsp;&nbsp;
          </span>
          {`${dataPoint.date}: ${dataPoint.previousValue}`}
        </p>
      </div>
    );
  }

  return null;
};
