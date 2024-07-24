import DashboardHabits from "./DashboardHabits";
import WeeklyScore from "./WeeklyScore";

export default function Dashboard() {
    return (
        <section className="flex flex-col gap-20 pb-12">
            <DashboardHabits />
            <WeeklyScore />
        </section>
    )
}