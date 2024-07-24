export default function ProgressBar() {
    // logic to calculate progress depending on completed habits per week
    return (
        <progress className="progress-bar relative w-full px-12 rounded-full before:content-['50%'] before:absolute before:left-[47%] before:transform-x-[-50%] before:text-white" max="100" value="50"></progress>
    )
}