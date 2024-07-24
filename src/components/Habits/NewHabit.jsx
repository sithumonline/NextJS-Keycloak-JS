import Button from "../Button";
import CheckboxButton from "../Inputs/CheckboxButton";
import DropDown from "../Inputs/DropDown";
import HabitColor from "../Inputs/HabitColor";
import Priority from "../Inputs/Priority";
import TextInput from "../Inputs/TextInput";
import ButtonInputWrapper from "../Wrappers/ButtonInputWrapper";
import WeekdayCheckboxList from "./WeekdayCheckboxList";

export default function NewHabit() {
    // logic to only show the WeekdaySelector comp if Sepcific Recurringness is selected
    // logic to only show the DropDown comp if Non-Sepcific Recurringness is selected
    return (
        <section className="flex flex-col justify-center items-center gap-8">
            <h2 className="uppercase text-2xl">Add New Habit</h2>
            <form className="w-4/5 flex flex-col justify-top items-center gap-12">
                <div className="w-full p-8 mx-auto bg-white rounded-2xl shadow-motivaa-shadow flex flex-col gap-8 justify-top items-center">
                    <div className="w-full flex justify-between items-end">
                        <TextInput text="Habit Title" />
                        <HabitColor />
                    </div>
                    <div className="w-full flex justify-between items-end">
                        <ButtonInputWrapper>
                            <CheckboxButton text="Specific Day" />
                            <CheckboxButton text="Non-Specific Day" />
                        </ButtonInputWrapper>
                        <DropDown />
                    </div>
                    <div>
                        <WeekdayCheckboxList />
                    </div>
                    <Priority />
                </div>
                <Button text="Add Habit" type="submit" style="w-fit" />
            </form>
        </section>
    )
}