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

    // Parse the date string to create a Date object
    const date = new Date(dataPoint.date);

    // Subtract one year from the date
    date.setFullYear(date.getFullYear() - 1);

    // Format the date to display only the month and year
    const previousYearDate = `${date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
    })}, ${date.getFullYear()}`;

    const calc = Math.round(
      (dataPoint.currentValue / dataPoint.previousValue) * 100
    );
    const percent =
      dataPoint.currentValue > dataPoint.previousValue
        ? `+ ${calc - 100}%`
        : `- ${100 - calc}%`;
    const textColor =
      dataPoint.currentValue > dataPoint.previousValue ? "seagreen" : "crimson";

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
          {`${dataPoint.date}  ${dataPoint.currentValue}`}
          <span className="mx-1 text-l font-bold" style={{ color: textColor }}>
            {percent}
          </span>
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
          {`${previousYearDate}  ${dataPoint.previousValue}`}
        </p>
      </div>
    );
  }

  return null;
};
