import React from "react";

import Trend3 from "../../../images/Trend3.svg";

const Dropdown: React.FC<any> = () => {
  return (
    <div className="ease-in z-10 mt-[145px] ml-[141px] flex flex-col items-start absolute p-[5px] gap-[5px] w-[212px] h-[167px] bg-[#FFFFFF] rounded-[10px] shadow-md">
      <div className="flex items-center py-[5px] px-[10px] gap-2.5 w-[202px] h-[22px] rounded-sm hover:bg-[#F1F1F1] cursor-pointer">
        <img
          className="w-[10px] h-[10px] font-black text-[10px] text-[#616161] flex items-center"
          src={Trend3}
          alt="trend3"
        ></img>
        <p className="w-[150px] h-[12px] font-normal text-[10px] flex items-center text-[#303030]">
          Average Order Value
        </p>
      </div>
      <div className="flex items-center py-[5px] px-[10px] gap-2.5 w-[202px] h-[22px] rounded-sm hover:bg-[#F1F1F1] cursor-pointer">
        <img
          className="w-[10px] h-[10px] font-black text-[10px] text-[#616161] flex items-center"
          src={Trend3}
          alt="trend3"
        ></img>
        <p className="w-[150px] h-[12px] font-normal text-[10px] flex items-center text-[#303030]">
          Conversion Rate
        </p>
      </div>
      <div className="flex items-center py-[5px] px-[10px] gap-2.5 w-[202px] h-[22px] rounded-sm hover:bg-[#F1F1F1] cursor-pointer">
        <img
          className="w-[10px] h-[10px] font-black text-[10px] text-[#616161] flex items-center"
          src={Trend3}
          alt="trend3"
        ></img>
        <p className="w-[150px] h-[12px] font-normal text-[10px] flex items-center text-[#303030]">
          Gross Sales
        </p>
      </div>
      <div className="flex items-center py-[5px] px-[10px] gap-2.5 w-[202px] h-[22px] rounded-sm hover:bg-[#F1F1F1] cursor-pointer">
        <img
          className="w-[10px] h-[10px] font-black text-[10px] text-[#616161] flex items-center"
          src={Trend3}
          alt="trend3"
        ></img>
        <p className="w-[150px] h-[12px] font-normal text-[10px] flex items-center text-[#303030]">
          Net return value
        </p>
      </div>
      <div className="flex items-center py-[5px] px-[10px] gap-2.5 w-[202px] h-[22px] rounded-sm hover:bg-[#F1F1F1] cursor-pointer">
        <img
          className="w-[10px] h-[10px] font-black text-[10px] text-[#616161] flex items-center"
          src={Trend3}
          alt="trend3"
        ></img>
        <p className="w-[150px] h-[12px] font-normal text-[10px] flex items-center text-[#303030]">
          Store search conversion
        </p>
      </div>
      <div className="flex items-center py-[5px] px-[10px] gap-2.5 w-[202px] h-[22px] rounded-sm hover:bg-[#F1F1F1] cursor-pointer">
        <img
          className="w-[10px] h-[10px] font-black text-[10px] text-[#616161] flex items-center"
          src={Trend3}
          alt="trend3"
        ></img>
        <p className="w-[150px] h-[12px] font-normal text-[10px] flex items-center text-[#303030]">
          Return rate
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
