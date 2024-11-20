export const Loading = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col animate-pulse px-4 py-4 gap-6 rounded-xl">
          <div className="bg-slate-200  p-4 rounded-xl w-[23rem] h-60"></div>
        </div>

        <div className="flex flex-col animate-pulse px-4 py-4 gap-6 rounded-xl">
          <div className="bg-slate-200 p-4 rounded-xl w-[23rem] h-60"></div>
        </div>

        <div className="flex flex-col animate-pulse px-4 py-4 gap-6 rounded-xl">
          <div className="bg-slate-200 p-4 rounded-xl w-[23rem] h-60"></div>
        </div>
      </div>
    </>
  );
};
