import Button from "../Button";
import CheckboxButton from "../Inputs/CheckboxButton";
import DropDown from "../Inputs/DropDown";
import HabitColor from "../Inputs/HabitColor";
import Priority from "../Inputs/Priority";
import ButtonInputWrapper from "../Wrappers/ButtonInputWrapper";
import WeekdayCheckboxList from "./WeekdayCheckboxList";
import Image from "next/image";
import diagram from "../../../public/test-diagram.png";


export default function QuickEditHabit({ selectedHabit, tempHabits, edit, setEdit }) {
    
    return (
        <section className="w-2/3 flex gap-8">
            <div className="flex flex-col gap-8">
                <form className="w-full flex flex-col justify-top items-center gap-12">
                    <h4 contentEditable={!edit} className="uppercase text-xl font-bold border-b-2 border-transparent outline-none hover:border-b-2 hover:border-purple">{tempHabits[selectedHabit]}</h4>
                    <div className="w-full flex flex-col gap-8 justify-top items-center">
                        <div className="w-full flex flex-col justify-between items-start gap-8">
                            <ButtonInputWrapper>
                                <CheckboxButton isReadonly={edit} text="Specific Day" />
                                <CheckboxButton isReadonly={edit} text="Non-Specific Day" />
                            </ButtonInputWrapper>
                            <DropDown isReadonly={edit} />
                        </div>
                        <div className="w-full flex justify-between items-end">
                            <HabitColor isReadonly={edit} />
                        </div>
                        <div className="ml-0 mr-auto">
                            <WeekdayCheckboxList isReadonly={edit} />
                        </div>
                        <Priority isReadonly={edit} />
                    </div>
                </form>
                <div>
                    <Image className="w-3/4 mx-auto" src={diagram} alt="diagram"/>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Button handleClick={() => setEdit(prev => !prev)} text={edit ? <i className="fa-solid fa-pen"></i> : <i class="fa-solid fa-check"></i>} type="submit" style="text-5xl w-30" />
                <Button text={<i className="fa-solid fa-plus"></i>} type="submit" style="text-5xl w-30" />
            </div>
        </section>
    )
}