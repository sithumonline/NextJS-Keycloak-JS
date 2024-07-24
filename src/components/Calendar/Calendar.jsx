import CalendarWeek from "./CalendarWeek";

export default function Calendar({ setActive }) {
    // need a month picker
    // logic for changing months and updating the weeks (numbers and periods) accordingly
    return (
        <section className="w-full flex flex-col justify-center items-start gap-8">
            <div className="w-4/5 mx-auto relative flex justify-center item-center">
                <div className="group flex items-center gap-4 absolute left-0 top-2 cursor-pointer">
                    <h4 className="uppercase tex-xl">June</h4>
                    <i className="group-hover:text-purple group-hover:transition-all group-hover:duration-200 fa-solid fa-angle-down"></i>
                </div>
                <h2 className="uppercase text-2xl self-center">Calendar</h2>
            </div>
            <ul className="w-4/5 mx-auto flex flex-col gap-8">
                <li>
                    <CalendarWeek setActive={setActive} score="50"/>
                </li>
                <li>
                    <CalendarWeek setActive={setActive} score="20"/>
                </li>
                <li>
                    <CalendarWeek setActive={setActive} score="100"/>
                </li>
                <li>
                    <CalendarWeek setActive={setActive} score="75"/>
                </li>
            </ul>
        </section>
    );
}
