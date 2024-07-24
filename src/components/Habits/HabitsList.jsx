export const dummyHabitsArray = ['Walk the dog', 'Take out the trash', 'Go to the gym'];
export default function HabitsList({ selectedHabit, setSelectedHabit }) {
    return (
        <ul className="w-1/3 flex flex-col gap-4">
            {dummyHabitsArray.map((habit, index) => {
                return (
                    <li key={habit} className={`${selectedHabit === index ? 'bg-purple text-white' : 'bg-gray'} relative rounded-2xl before:content-[''] before:absolute before:top-0 before:right-0 before:rounded-e-2xl before:w-6 before:h-full before:bg-green`}>
                        <button className="uppercase w-full text-left px-4 py-6" onClick={() => {setSelectedHabit(index)}}>{habit}</button>
                    </li>
                )
            })}
        </ul>
    )
}