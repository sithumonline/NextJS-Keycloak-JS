export default function Button({text, style, handleClick}) {
  // style prop is to be able to add custom styles to different buttons while still having the basic styles
    return (
        <button onClick={handleClick} className={`px-6 py-4 text-white uppercase rounded-2xl bg-purple hover:bg-purple/80 transition-all duration-200 ${style}`}>{text}</button>
    )
}