export function Reset({ onreset, bill }) {
  return (
    <div>
      {bill > 0 ?
        <button onClick={onreset}>Reset</button> :
        ""}
    </div>
  );
}
