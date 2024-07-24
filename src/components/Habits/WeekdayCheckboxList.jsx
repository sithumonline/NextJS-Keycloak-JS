import WeekdayCheckbox from "./WeekdayCheckbox";

export default function WeekdayCheckboxList({ isReadonly }) {
  return (
    <ul className={`${isReadonly ? 'opacity-50 pointer-events-none' : ''} flex justify-between items-center gap-4`}>
      <li>
        <WeekdayCheckbox weekday={"M"} />
      </li>
      <li>
        <WeekdayCheckbox weekday={"T"} />
      </li>
      <li>
        <WeekdayCheckbox weekday={"W"} />
      </li>
      <li>
        <WeekdayCheckbox weekday={"T"} />
      </li>
      <li>
        <WeekdayCheckbox weekday={"F"} />
      </li>
      <li>
        <WeekdayCheckbox weekday={"S"} />
      </li>
      <li>
        <WeekdayCheckbox weekday={"S"} />
      </li>
    </ul>
  );
}
