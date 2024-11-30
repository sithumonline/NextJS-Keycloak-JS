export default function TextInput({ text, isReadonly, value, isDisabled, setValue }) {
  return (
    <div className="group relative flex flex-col gap-4">
      <label className="uppercase pl-6" htmlFor="title">
        {text}
      </label>
      <input
        className={`${isReadonly ? 'opacity-50 pointer-events-none' : 'group-hover:border-4 transition-all duration-200'} h-16 min-w-[300px] p-2 px-4 bg-white uppercase border-2 border-purple rounded-2xl outline-none`}
        type="text"
        id={text}
        placeholder={text}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {isDisabled && <i className="absolute right-4 top-16 text-dark fa-solid fa-lock"></i>}
    </div>
  );
}