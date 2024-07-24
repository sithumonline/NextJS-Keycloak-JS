import TickCheckbox from "./TickCheckbox";

export default function WeeklyHabitAny({habitTitle}) {
    // logic to get number of times a non-specific habit has to be done per week in order to modify style accordingly
    // reason: if habit is only 1x/week, its container will be smaller, and not span all the device width
    return (
        <div className="w-full bg-white flex gap-4 flex-col p-4 rounded-3xl shadow-motivaa-shadow">
            <h4 className="uppercase">{habitTitle}</h4>
            <ul className="flex gap-8 justify-between items-center">
                <li className="flex-grow">
                    <TickCheckbox />
                </li>
                <li className="flex-grow">
                    <TickCheckbox />
                </li>
            </ul>
        </div>
    )
}