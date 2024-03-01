import React from "react";

type TTabPanelProps = {
  isActive: Boolean;
  children: JSX.Element;
};

export const TabPanel = ({ isActive, children }: TTabPanelProps) => {
  return isActive ? (
    <div className=" w-[773px] h-[150px]">{children}</div>
  ) : null;
};
