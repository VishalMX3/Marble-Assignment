import React, { useState } from "react";
import { TabItem } from "./TabItem";
import { TabPanel } from "./TabPanel";
import { TTab } from "../../interfaces";

type TTabViewProps = {
  tabs: TTab[];
};

export const TabView = ({ tabs }: TTabViewProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTab = (index: number) => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-start bg-white absolute w-[793px] h-[282px] rounded-xl p-2.5 gap-2.5 shadow-md">
      <div className="flex items-center p-0 gap-1 w-[773px] h-[60px] ">
        {tabs?.map((tab: TTab, index: number) => (
          <div
            key={tab?.id}
            className=" hover:bg-[#F1F1F1] flex flex-col items-start py-[5px] px-[10px] gap-[25px] w-[183px] h-[60px] rounded-lg"
          >
            <TabItem
              key={tab?.id}
              label={tab?.label}
              data={tab?.data}
              isActive={index === activeTab}
              clickHandler={() => setActiveTab(index)}
            />
          </div>
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

      <div
        className={`w-[773px] h-[150px] bg-lime-300  ${
          collapsed ? "hidden" : ""
        }`}
      >
        {tabs?.map((tab: TTab, index: number) => (
          <TabPanel key={tab?.id} isActive={index === activeTab}>
            {tab?.content}
          </TabPanel>
        ))}
      </div>

      <div className="w-[773px] h-[32px] bg-emerald-300 footer">
        Date Picker
      </div>
    </div>
  );
};
