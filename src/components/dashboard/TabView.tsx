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
    <div className="bg-stone-50 rounded-xl p-4">
      <div className="w-full mx-auto mb-4 flex flex-col justify-center items-stretch md:flex-row md:justify-between drop-shadow-md">
        {tabs?.map((tab: TTab, index: number) => (
          <div key={tab?.id} className="p-1 w-full mx-auto md:flex-1 md:mr-2">
            <div className="flex items-center">
              <TabItem
                key={tab?.id}
                label={tab?.label}
                data={tab?.data}
                isActive={index === activeTab}
                clickHandler={() => setActiveTab(index)}
              />
              {index === tabs.length - 1 && ( // Render dropdown button after the last TabItem
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
              )}
            </div>
          </div>
        ))}
      </div>
      <div
        className={`mx-auto transition-all duration-300 ${
          collapsed ? "hidden" : ""
        }`}
      >
        {tabs?.map((tab: TTab, index: number) => (
          <TabPanel key={tab?.id} isActive={index === activeTab}>
            {tab?.content}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};
