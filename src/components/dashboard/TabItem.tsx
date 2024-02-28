import React from "react";
import { IChartDatum2 } from "../../interfaces";

type TTabItem = {
  label: string;
  isActive: Boolean;
  data: IChartDatum2[];
  clickHandler: () => void;
};

export const TabItem = ({ label, isActive, data, clickHandler }: TTabItem) => {
  const calculateSum = (data: any[]) => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum = sum + data[i].currentValue;
    }
    return sum;
  };
  const calculateSumPrev = (data: any[]) => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum = sum + data[i].previousValue;
    }
    return sum;
  };

  const currentValueSum = calculateSum(data);
  const previousValueSum = calculateSumPrev(data);

  const calc = Math.round(
    ((currentValueSum - previousValueSum) / previousValueSum) * 100
  );

  const percentDifference =
    currentValueSum > previousValueSum ? `+ ${calc}%` : ` ${calc}%`;

  const textColor = currentValueSum > previousValueSum ? "seagreen" : "crimson";

  return (
    <a
      className={`text-l font-bold tab tab-bordered${
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
      {label}
      <div>{currentValueSum}</div>
      <div>{percentDifference}</div>
    </a>
  );
};
