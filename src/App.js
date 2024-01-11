import { useState } from "react";
import { Billamount } from "./Billamount";
import { Rating } from "./Rating";
import { Total } from "./Total";
import { Reset } from "./Reset";


function App() {
  
  const[rating1,setRating1] = useState(0);
  const[rating2,setRating2] = useState(0)
  const[bill,setBill] = useState();
  const tip = bill * ((rating1+rating2)/2/100)

  function ratingchangeHandler1(e){
  setRating1(Number(e.target.value))
  
  }

  function ratingchangeHandler2(e){
  setRating2(Number(e.target.value));
  
  }

  function billHandler(e){
    setBill(Number(e.target.value))
  }

  function resetHandler(){
    setBill("");
    setRating1(0);
    setRating2(0);
  }

  return (
    <div className="App">
      <Billamount 
      bill={bill}
      onChangeBill = {billHandler}
      
      />
      <Rating rating={rating1}
      OnRatingChange = {ratingchangeHandler1}
      >
        How did you like the service</Rating>
      <Rating rating={rating2} 
      OnRatingChange = {ratingchangeHandler2}
      >
      How did your Friend like the service</Rating>
      
      <Total bill={bill} tip={tip} />
      <Reset bill = {bill} onreset = {resetHandler} />
    </div>
  );
}

export default App;

