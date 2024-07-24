export default function HabitColor({ isReadonly }) {
  // tailwind doesn't support template literal in its styles, so I couldn't map the inputs
  // for now it works, we can come up with something later
  const colors = [
    "#81FF46",
    "#00E174",
    "#0075E2",
    "#CE1ADD",
    "#FF42A8",
    "#FFB72B",
  ];
  return (
    <div className="flex flex-col gap-4">
      <label className="uppercase pl-6">Habit Color</label>
      <ul
        className={`${
          isReadonly ? "opacity-50 pointer-events-none" : ""
        } flex justify-between items-center gap-4`}
      >
        <li>
          <button className="bg-[#81FF46] w-16 h-16 rounded-full hover:scale-125 transition-all duration-200">
            <input className="invisible" type="checkbox" />
          </button>
        </li>
        <li>
          <button className="bg-[#00E174] w-16 h-16 rounded-full hover:scale-125 transition-all duration-200">
            <input className="invisible" type="checkbox" />
          </button>
        </li>
        <li>
          <button className="bg-[#0075E2] w-16 h-16 rounded-full hover:scale-125 transition-all duration-200">
            <input className="invisible" type="checkbox" />
          </button>
        </li>
        <li>
          <button className="bg-[#CE1ADD] w-16 h-16 rounded-full hover:scale-125 transition-all duration-200">
            <input className="invisible" type="checkbox" />
          </button>
        </li>
        <li>
          <button className="bg-[#FF42A8] w-16 h-16 rounded-full hover:scale-125 transition-all duration-200">
            <input className="invisible" type="checkbox" />
          </button>
        </li>
        <li>
          <button className="bg-[#FFB72B] w-16 h-16 rounded-full hover:scale-125 transition-all duration-200">
            <input className="invisible" type="checkbox" />
          </button>
        </li>
      </ul>
    </div>
  );
}
