import HabitsList from "./HabitsList";
import QuickEditHabit from "./QuickEditHabit";
import { dummyHabitsArray } from "./HabitsList";

export default function Habits({ selectedHabit, setSelectedHabit, edit, setEdit }) {
    return (
        <section className="w-full flex flex-col justify-center items-center gap-8">
            <h2 className="uppercase text-2xl">Habits</h2>
            <div className="w-4/5 bg-white p-8 rounded-2xl flex justify-between items-top gap-12 shadow-motivaa-shadow">
                <HabitsList selectedHabit={selectedHabit} setSelectedHabit={setSelectedHabit}/>
                <QuickEditHabit tempHabits={dummyHabitsArray} selectedHabit={selectedHabit} edit={edit} setEdit={setEdit}/>
            </div>
        </section>
    )
}