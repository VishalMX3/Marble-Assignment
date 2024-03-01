export const OverlayInfo: React.FC<{ info: string; desc: string }> = ({
  info,
  desc,
}) => {
  return (
    <div className="ease-in flex flex-col z-10 absolute top-[1px] left-[2px] py-[15px] px-[10px] gap-2.5 bg-[#FFFFFF] rounded-[10px] shadow-md items-start w-[356px] h-[76px]">
      <p className="w-[146px] h-[17px] font-semibold text-[14px] text-[rgba(0, 0, 0, 1)]">
        {info}
      </p>
      <p className="w-[338px] h-[19px] font-normal text-[13px] text-[rgba(0, 0, 0, 0.8)]">
        {desc}
      </p>
    </div>
  );
};
