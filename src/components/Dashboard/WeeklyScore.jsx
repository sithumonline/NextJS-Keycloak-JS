import Button from "../Button";
import Image from "next/image";
import diagram from "../../../public/test-diagram.png";

export default function DashboardWeeklyScore() {
    return (
        <section className="w-4/5 mx-auto flex flex-col gap-10 justify-center items-center">
            <div className="w-full relative flex items-center justify-center">
                <h3 className="text-2xl uppercase">Weekly Score</h3>
                <Button text="View More" style="absolute right-0" />
            </div>
            <div className="w-full px-12">
                <Image className="w-3/4 mx-auto" src={diagram} alt="diagram"/>
            </div>
        </section>
    )
}