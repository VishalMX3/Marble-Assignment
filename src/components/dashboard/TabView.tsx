import React, { useState } from "react";
import { TabItem } from "./TabItem";
import { TabPanel } from "./TabPanel";
import { TTab } from "../../interfaces";

type TTabViewProps = {
  tabs: TTab[];
};

export const TabView = ({ tabs }: TTabViewProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-stone-50 rounded-xl p-4">
      <div className="w-full mx-auto mb-4 flex flex-col justify-center items-stretch md:flex-row md:justify-between drop-shadow-md">
        {tabs?.map((tab: TTab, index: number) => (
          <div key={tab?.id} className="p-1 w-full mx-auto md:flex-1 md:mr-2">
            <TabItem
              key={tab?.id}
              label={tab?.label}
              data={tab?.data}
              isActive={index === activeTab}
              clickHandler={() => setActiveTab(index)}
            />
          </div>
        ))}
      </div>
      <div className=" mx-auto">
        {tabs?.map((tab: TTab, index: number) => (
          <TabPanel key={tab?.id} isActive={index === activeTab}>
            {tab?.content}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};
