import React from "react";
import Trend2 from "../../../images/Trend2.svg";
import InvertedTrend2 from "../../../images/InvertedTrend2.svg";

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
        ? `${calc - 100}%`
        : `${100 - calc}%`;
    const textColor =
      dataPoint.currentValue > dataPoint.previousValue ? "seagreen" : "crimson";

    const tooltipStyle = {
      left: coordinate.x, // Adjust positioning
      top: coordinate.y, // Adjust positioning
    };

    return (
      <div
        className="p-[5px] w-[180px] h-[62px] left-[17px] top-[23px] flex flex-col items-start gap-[5px] shadow-md rounded-[10px]"
        style={tooltipStyle}
      >
        <p className="upper flex items-center py-[5px] px-[10px] w-[170px] h-[25px] justify-evenly">
          <span
            className=""
            style={{
              width: "10px",
              height: "1px",
              border: `2px solid ${colors?.stroke}`,
              backgroundColor: colors?.fill,
            }}
          >
            &nbsp;&nbsp;
          </span>
          <div className="w-13 h-3 font-normal text-[10px] text-[rgba(48, 48, 48, 1)]">
            {dataPoint.date}
          </div>
          <div className="w-[33px] h-3 font-medium text-[10px] text-[rgba(48, 48, 48, 1)]">
            {dataPoint.currentValue}
          </div>

          <span className="flex items-center gap-[2px] w-[29px] h-[15px]">
            <img
              src={
                dataPoint.currentValue > dataPoint.previousValue
                  ? Trend2
                  : InvertedTrend2
              }
              className="w-[12px] h-[10px] font-black text-[10px] flex items-center text-center text-[rgba(97, 97, 97, 1)]"
            ></img>
            <span className="text-[rgba(97, 97, 97, 1)] w-[15px] h-[15px] font-normal text-[10px]">
              {percent}
            </span>
          </span>
        </p>

        <p className="lower flex items-center py-[5px] px-[10px] w-[170px] h-[25px] justify-evenly">
          <span
            className=""
            style={{
              width: "10px",
              height: "1px",
              border: "2px solid lightblue",
              backgroundColor: "rgba(173, 216, 230, 0.2)",
            }}
          >
            &nbsp;&nbsp;
          </span>

          <div className="w-13 h-3 font-normal text-[10px] text-[rgba(48, 48, 48, 1)]">
            {previousYearDate}
          </div>
          <div className="w-[33px] h-3 font-medium text-[10px] text-[rgba(48, 48, 48, 1)]">
            {dataPoint.previousValue}
          </div>

          <span className="flex items-center gap-[2px] w-[29px] h-[15px]"></span>
        </p>
      </div>
    );
  }

  return null;
};
