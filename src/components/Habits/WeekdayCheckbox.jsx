export default function WeekdayCheckbox({ weekday }) {
    // state to handle completed habits on specific days
    return (
        <button className="relative group w-16 h-16 bg-gray flex justify-center items-center border-2 border-transparent rounded-full hover:border-purple transition-all duration-200">
            <span className="group-hover:opacity-0 opacity-100 transition-all duration-200 absolute">{weekday}</span>
            <i className="group-hover:opacity-100 text-purple text-2xl opacity-0 transition-all duration-200 absolute fa-solid fa-check"></i>
        </button>
    )
}