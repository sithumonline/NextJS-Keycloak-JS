import WeeklyHabitAny from "../Habits/WeeklyHabitAny";
import WeeklyHabitFixed from "../Habits/WeeklyHabitFixed";

export default function DashboardHabits() {
    return (
        <section className="w-4/5 mx-auto flex flex-col gap-8">
            <div className="flex justify-between items-center">
                <h4 className="text-xl uppercase [word-spacing:3px]">Today is 24th of June</h4>
                <h2 className="text-2xl uppercase font-bold">Welcome username!</h2>
                <h4 className="text-xl uppercase [word-spacing:3px]">Week 26 June 24-30</h4>
            </div>
            <WeeklyHabitFixed habitTitle="Walk the dog"/>
            <WeeklyHabitAny habitTitle="Take out the trash"/>
        </section>
    )
}
