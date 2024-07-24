import WeekdayCheckboxList from "./WeekdayCheckboxList";

export default function WeeklyHabitFixed({habitTitle}) {
    return (
        <div className="w-full bg-white flex gap-4 flex-col p-4 rounded-3xl shadow-motivaa-shadow">
            <h4 className="uppercase">{habitTitle}</h4>
            <WeekdayCheckboxList />
        </div>
    )
}