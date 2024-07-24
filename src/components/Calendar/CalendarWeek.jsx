export default function CalendarWeek({ score, setActive }) {
    // logic to dynamically set up week numbers and periods
    return (
        <div onClick={() => setActive("week-overview")} className="w-full flex flex-col gap-4 p-8 bg-white cursor-pointer rounded-2xl shadow-motivaa-shadow hover:scale-[1.01] transition-all duation-200">
            <h3 className="uppercase ">Week 26 - June 24-30</h3>
            <progress className="calendar-weekly-score-bar relative w-full rounded-full" max="100" value={score}></progress>
        </div>
    )
}