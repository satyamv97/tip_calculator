export function Billamount({ bill, onChangeBill }) {

  return (
    <div>How muh was the bill ?
      <input value={bill} type="number" onChange={onChangeBill} />
      
    </div>
  );
}
