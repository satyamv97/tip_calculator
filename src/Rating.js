export function Rating({ children, rating, OnRatingChange }) {

  return (
    <div>
      {children}
      <span>
        <select value={rating} onChange={OnRatingChange}>
          <option value='0'>Dissattisfied</option>
          <option value="5">It was Okay (5%)</option>
          <option value='10'>It was Good (10%)</option>
          <option value='20'> Absolutely Amazing(20%)</option>
        </select>
      </span>
    </div>
  );
}
