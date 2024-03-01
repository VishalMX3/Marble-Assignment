export const OverlayInfo: React.FC<{ info: string }> = ({ info }) => {
  return (
    <div className="ease-in flex flex-col z-10 absolute top-[1px] left-[2px] py-[15px] px-[10px] gap-2.5 bg-[#FFFFFF] rounded-[10px] shadow-md items-start w-[356px] h-[76px]">
      {info}
    </div>
  );
};
