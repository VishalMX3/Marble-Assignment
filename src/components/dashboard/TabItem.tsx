import React from "react";
import { IChartDatum2 } from "../../interfaces";

type TTabItem = {
  label: string;
  isActive: boolean;
  data: IChartDatum2[];
  clickHandler: () => void;
};

export const TabItem = ({ label, isActive, data, clickHandler }: TTabItem) => {
  const calculateSum = (data: any[]) => {
    return data.reduce((sum, item) => sum + item.currentValue, 0);
  };

  const calculateSumPrev = (data: any[]) => {
    return data.reduce((sum, item) => sum + item.previousValue, 0);
  };

  const currentValueSum = calculateSum(data);
  const previousValueSum = calculateSumPrev(data);

  const calc = Math.round(
    ((currentValueSum - previousValueSum) / previousValueSum) * 100
  );
  const percentDifference =
    currentValueSum > previousValueSum ? `+ ${calc}%` : ` ${calc}%`;
  const textColor =
    currentValueSum > previousValueSum ? "text-green-500" : "text-red-500";

  return (
    <a
      className={`stat my-2 py-4 flex-1 rounded-xl${
        isActive ? " tab-active" : ""
      }`}
      onClick={clickHandler}
      style={{
        transition: "background-color 0.1s ease-in-out",
        backgroundColor: isActive ? "#D9D9D9" : "",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#D9D9D9";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = isActive ? "#D9D9D9" : "";
      }}
    >
      <div className="stat-title text-l">{label}</div>

      <div className="stat-desc my-2 flex items-center">
        <div className="text-xl font-bold mr-2">{currentValueSum}</div>
        <span className="mx-1 text-l text-slate-500">{percentDifference}</span>
      </div>
    </a>
  );
};
