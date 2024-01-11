export function Total({ bill, tip }) {
  return (
    <> {bill > 0 ? <div>
      You Pay ${bill + tip} (${bill} + ${tip}) tip
    </div> : ""}
    </>
  );
}
