export const OverlayInfo: React.FC<{ info: string }> = ({ info }) => {
  return (
    <div className="z-10 absolute top-[3px] left-[3px] p-2 bg-gray-200 rounded-md shadow-md">
      {info}
    </div>
  );
};
