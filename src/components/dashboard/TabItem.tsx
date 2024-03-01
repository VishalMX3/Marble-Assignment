import React, { useState } from "react";
import { IChartDatum2 } from "../../interfaces";
import pen from "../../../images/pen.svg";
import Trend from "../../../images/Trend.svg";
import InvertedTrend from "../../../images/InvertedTrend.svg";
import Dropdown from "./Dropdown";
type TTabItem = {
  label: string;
  isActive: boolean;
  data: IChartDatum2[];
  clickHandler: () => void;
};

export const TabItem = ({ label, isActive, data, clickHandler }: TTabItem) => {
  const [isHover, setIsHover] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const calculateSum = (data: any[]) => {
    return data.reduce((sum, item) => sum + item.currentValue, 0);
  };

  const calculateSumPrev = (data: any[]) => {
    return data.reduce((sum, item) => sum + item.previousValue, 0);
  };

  const currentValueSum = calculateSum(data);
  const previousValueSum = calculateSumPrev(data);

  const calc = Math.round(
    (Math.abs(currentValueSum - previousValueSum) / previousValueSum) * 100
  );

  const percentDifference =
    currentValueSum > previousValueSum ? `${calc}%` : `${calc}%`;

  const handlePenClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      style={{
        backgroundColor: isActive ? "#F1F1F1" : "",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className=" hover:bg-[#F1F1F1] flex flex-col items-start py-[5px] px-[10px] gap-[25px] w-[183px] h-[60px] rounded-lg relative"
    >
      <a
        className={` w-[163px] h-[50px] flex flex-col items-center p-0 gap-[5px] 
        ${isActive ? " tab-active" : ""}`}
        onClick={clickHandler}
      >
        <div className="flex justify-between items-center gap-[25px] w-[163px] h-[23px]">
          <div className="m-auto w-[123px] relative h-[17px]">
            <div className="flex flex-col items-start p-0 gap-[0px] absolute h-[16px] left-0 top-0">
              <p className="h-[15px] font-medium text-xs text-[#303030]">
                {label}
              </p>
              <span className="w-[123px] h-[0px] border-dashed border-[1px] border-[#CCCCC]"></span>
            </div>
          </div>
          <span
            className="hover:bg-[#c9cac7] ease-in flex flex-col justify-center items-center p-[5px] gap-2.5 m-auto w-[23px] h-[23px] rounded cursor-pointer"
            onClick={handlePenClick}
          >
            <img
              src={pen}
              alt="pen"
              className={`${
                isActive || isHover ? "" : "hidden"
              } text-xs w-[13px] h-[13px] text`}
            ></img>
          </span>
        </div>

        <div className="flex items-center p-0 w-[163px] h-[22px] gap-[5px] relative">
          <div className="h-[22px] text-[#303030] font-semibold text-[15px] overflow-visible">
            {currentValueSum}
          </div>
          <div className="w-[24px] h-[15px] gap-[2px] flex items-center p-0">
            <img
              src={currentValueSum > previousValueSum ? Trend : InvertedTrend}
              className="w-[7px] h-[10px] font-black text-[10px] flex items-center text-center text-[#616161]"
            ></img>
            <span className="text-slate-500 w-[15px] h-[15px] font-normal text-[10px]">
              {percentDifference}
            </span>
          </div>
          {isDropdownOpen && <Dropdown />}
        </div>
      </a>
    </div>
  );
};
