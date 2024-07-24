import Image from "next/image";
import diagram from "../../../public/test-diagram.png";

export default function Overview() {
    return (
        <section className="w-full pt-12 flex flex-col gap-12">
            <div className="w-full px-12">
                <Image className="w-3/4 mx-auto" src={diagram} alt="diagram"/>
            </div>
        </section>
    )
}