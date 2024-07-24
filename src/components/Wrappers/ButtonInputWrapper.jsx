export default function ButtonInputWrapper({children}) {
  return (
    <div className="flex flex-col gap-4">
      <label className="uppercase pl-6" htmlFor="recurringness">
        Recurringness
      </label>
      <div className="flex gap-4">
        {children}
      </div>
    </div>
  );
}
