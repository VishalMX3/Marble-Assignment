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
      className={` w-[163px] h-[50px] flex flex-col items-center p-0 gap-[5px] ${
        isActive ? " tab-active" : ""
      }`}
      onClick={clickHandler}
      style={{
        backgroundColor: isActive ? "#F1F1F1" : "",
      }}
      // onMouseEnter={(e) => {
      //   e.currentTarget.style.backgroundColor = "#D9D9D9";
      // }}
      // onMouseLeave={(e) => {
      //   e.currentTarget.style.backgroundColor = isActive ? "#D9D9D9" : "";
      // }}
    >
      <div className="flex justify-between items-center gap-[25px] w-[163px] h-[23px]">
        <div className="m-auto w-[123px] relative h-[17px]">
          <div className="flex flex-col items-start p-0 gap-[0px] absolute w-[123px] h-[16px] left-0 top-0">
            <p className="w-[123px] h-[15px] font-medium text-xs text-[#303030]">
              {label}
            </p>
            <span className="w-[123px] h-[0px] border-dashed border-[1px] border-[#CCCCC]"></span>
          </div>
        </div>
        <span className="flex flex-col justify-center items-center p-[5px] gap-2.5 m-auto w-[23px] h-[23px] rounded">
          <p className="text-xs w-[13px] h-[13px] text">p</p>
        </span>
      </div>

      <div className="flex items-center p-0 gap-[5px] w-[163px] h-[22px]">
        <div className="w-[59px] h-[22px] text-[#303030] font-semibold text-base">
          {currentValueSum}
        </div>
        <div className="w-[24px] h-[15px] gap-[2px] flex items-center ">
          <span className="text-slate-500 w-[15px] h-[15px] font-normal text-xs">
            {percentDifference}
          </span>
        </div>
      </div>
    </a>
  );
};
