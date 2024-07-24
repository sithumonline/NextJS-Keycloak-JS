import Image from 'next/image';
import logo from '../../public/logo.svg'; 

export default function Header({active, setActive}) {
    return (
        <header className="w-full h-[70px] px-8 pt-8 flex gap-8 items-center">
            <Image className="w-[200px]" src={logo} alt="logo" />
            <ul className="w-full h-[70px] flex justify-between items-center bg-white shadow-motivaa-shadow rounded-3xl">
                <li className={`px-8 uppercase cursor-pointer hover:text-purple transition-all duration-200 ${active === "home" ? 'font-bold text-purple' : ''}`} onClick={() => setActive("home")}>Home</li>
                <li className={`px-8 uppercase cursor-pointer hover:text-purple transition-all duration-200 ${active === "habits" ? 'font-bold text-purple' : ''}`} onClick={() => setActive("habits")}>Habits</li>
                <li className={`px-8 uppercase cursor-pointer hover:text-purple transition-all duration-200 ${active === "calendar" ? 'font-bold text-purple' : ''}`} onClick={() => setActive("calendar")}>Calendar</li>
                <li className={`px-8 uppercase cursor-pointer hover:text-purple transition-all duration-200 ${active === "overview" ? 'font-bold text-purple' : ''}`} onClick={() => setActive("overview")}>Overview</li>
                <li className={`px-8 uppercase cursor-pointer hover:text-purple transition-all duration-200 ${active === "profile" ? 'font-bold text-purple' : ''}`} onClick={() => setActive("profile")}>Profile</li>
            </ul>
        </header>
    )
}