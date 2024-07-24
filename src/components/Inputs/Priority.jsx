export default function Priority({ isReadonly }) {
    // logic for different prio values to attach to habits (I guess it would only matter in the calculation of scores)
    return (
        <div className="w-full relative flex flex-col gap-4">
            <label className="uppercase pl-6" htmlFor="slider">Priority</label>
            <input className={`${isReadonly ? 'opacity-50 pointer-events-none' : ''}`} type="range" min="0" max="100" step="25"/>
            <div className={`${isReadonly ? 'opacity-50' : ''} w-full px-4 absolute bottom-0 flex justify-between items-center`}>
                <span className="uppercase cursor-default">Whatever</span>
                <span className="uppercase cursor-default text-white">Must have</span>
            </div>

        </div>
    )
}