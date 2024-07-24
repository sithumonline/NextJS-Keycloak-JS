export default function DropDown({ isReadonly }) {
  // custom dropdown input -> need some state to handle open/close events to open the dropdownlist
  return (
    <div className="flex flex-col gap-4">
      <label className="uppercase pl-6" htmlFor="weekly-days">
        Times / Week
      </label>
      <div
        className={`${
          isReadonly ? "opacity-50 pointer-events-none" : ""
        } relative group`}
      >
        <input
          type="text"
          value="1"
          readOnly={true}
          className="h-16 min-w-[300px] p-2 px-4 pl-6 bg-white border-2 border-purple cursor-pointer rounded-2xl outline-none group-hover:border-t-4 group-hover:border-s-4 group-hover:border-e-4 group-hover:border-b-0 group-hover:rounded-t-2xl group-hover:rounded-b-none transition-all duration-200"
          name="weekly-days"
          id="weekly-days"
        />
        <i className="absolute top-[1.2rem] right-[1.2rem] text-xl hidden group-hover:block fa-solid fa-angle-up"></i>
        <i className="absolute top-[1.2rem] right-[1.2rem] text-xl group-hover:hidden fa-solid fa-angle-down"></i>
        <div className="hidden group-hover:flex flex-col min-w-[300px] bg-white border-4 border-purple rounded-b-2xl border-t-0 absolute z-10 top-16">
          <span className="px-4 py-2 cursor-pointer hover:bg-gray">1x</span>
          <span className="px-4 py-2 cursor-pointer hover:bg-gray">2x</span>
          <span className="px-4 py-2 cursor-pointer hover:bg-gray">3x</span>
          <span className="px-4 py-2 cursor-pointer hover:bg-gray">4x</span>
          <span className="px-4 py-2 cursor-pointer hover:bg-gray">5x</span>
          <span className="px-4 py-2 cursor-pointer rounded-b-xl hover:bg-gray">
            6x
          </span>
        </div>
      </div>
    </div>
  );
}
