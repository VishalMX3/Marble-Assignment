import React, { useState } from "react";
import { TabItem } from "./TabItem";
import { TabPanel } from "./TabPanel";
import { TTab } from "../../interfaces";

type TTabViewProps = {
  tabs: TTab[];
  startDate: Date;
  endDate: Date;
};

export const TabView = ({ tabs, startDate, endDate }: TTabViewProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  const previousYearStartDate = new Date(
    startDate?.getFullYear() - 1,
    startDate?.getMonth(),
    startDate?.getDate()
  );
  const previousYearEndDate = new Date(
    endDate?.getFullYear() - 1,
    endDate?.getMonth(),
    endDate?.getDate()
  );

  const toggleTab = (index: number) => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-start bg-white absolute w-[793px] rounded-xl p-2.5 gap-2.5 shadow-md mt-48">
      <div className="flex items-center p-0 gap-1 w-[773px] h-[60px] ">
        {tabs?.map((tab: TTab, index: number) => (
          <TabItem
            key={tab?.id}
            label={tab?.label}
            data={tab?.data}
            desc={tab?.desc}
            isActive={index === activeTab}
            clickHandler={() => setActiveTab(index)}
          />
        ))}
        <div className="arrow h-[17px] w-[25px] gap-5 px-[5px] flex items-center justify-center">
          <button
            className="ml-2 text-gray-500 focus:outline-none"
            onClick={() => toggleTab(activeTab)}
          >
            {!collapsed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M17.707 12.707a1 1 0 01-1.414 0L10 6.414 3.707 12.707a1 1 0 01-1.414-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.293 7.293a1 1 0 011.414 0L10 13.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`w-[773px] h-[150px]   ${collapsed ? "hidden" : ""}`}>
        {tabs?.map((tab: TTab, index: number) => (
          <TabPanel key={tab?.id} isActive={index === activeTab}>
            {tab?.content}
          </TabPanel>
        ))}
      </div>

      <div
        className={`w-[773px] h-[32px] flex justify-end py-[5px] px-[0px] gap-2.5 ${
          collapsed ? "hidden" : ""
        }`}
      >
        <div className=" w-[375px] h-[22px]"></div>
        <div className="rounded-sm w-[189px] h-[22px] bg-[#F6F6F7] flex items-center py-[5px] px-[10px] gap-2.5 justify-center">
          <span
            className=""
            style={{
              width: "10px",
              height: "1px",
              border: "1px solid rgb(7, 152, 241)",
            }}
          >
            &nbsp;&nbsp;
          </span>
          <div className="w-[149px] h-[12px] font-normal text-[10px] flex items-center text-[#70707A]">
            {`${startDate?.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })} - ${endDate?.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}`}
          </div>
        </div>
        <div className="rounded-sm w-[189px] h-[22px] bg-[#F6F6F7] flex items-center py-[5px] px-[10px] gap-2.5">
          <span
            className=""
            style={{
              width: "10px",
              height: "1px",
              border: "1px solid rgba(173, 216, 230, 0.2)",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
            }}
          >
            &nbsp;&nbsp;
          </span>
          <div className="w-[149px] h-[12px] font-normal text-[10px] flex items-center text-[#70707A]">
            {`${previousYearStartDate?.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })} - ${previousYearEndDate?.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}`}
          </div>
        </div>
      </div>
    </div>
  );
};
