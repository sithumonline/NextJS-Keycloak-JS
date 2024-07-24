import WeeklyHabitAny from "../Habits/WeeklyHabitAny";
import WeeklyHabitFixed from "../Habits/WeeklyHabitFixed";
import WeeklyScore from "../Dashboard/WeeklyScore";

export default function WeekOverview({ setActive }) {
    return (
        <section className="w-full flex flex-col gap-12">
            <div className="w-4/5 mx-auto relative flex justify-center items-top">
                <div onClick={() => setActive("calendar")} className="group absolute left-0 flex gap-2 items-center cursor-pointer">
                    <i className="group-hover:text-purple transition-all duration-200 fa-solid fa-angle-left"></i>
                    <h4 className="uppercase">Calendar</h4>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    <h2 className="uppercase text-2xl">Overview</h2>
                    <h2 className="uppercase text-xl">Week 26 - June 24-30</h2>
                </div>
            </div>
            <div className="w-4/5 mx-auto flex flex-col gap-8">
                <WeeklyHabitFixed habitTitle="Walk the dog"/>
                <WeeklyHabitAny habitTitle="Take out the trash"/>
            </div>
            <WeeklyScore />
        </section>
    )
}