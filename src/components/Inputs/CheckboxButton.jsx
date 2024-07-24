export default function CheckboxButton({ text, isReadonly }) {
  return (
    <button className={`${isReadonly ? 'opacity-50 pointer-events-none' : ''} px-6 py-4 min-w-32 bg-gray border-2 border-transparent rounded-2xl uppercase hover:text-purple hover:border-purple transition-all duration-200`}>
      {text}
    </button>
  );
}
