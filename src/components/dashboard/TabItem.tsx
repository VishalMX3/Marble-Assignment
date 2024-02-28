import React from "react";

type TTabItem = {
  label: string;
  isActive: Boolean;
  clickHandler: () => void;
};

export const TabItem = ({ label, isActive, clickHandler }: TTabItem) => {
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
    </a>
  );
};
