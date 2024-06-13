import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [myRating, setMyRating] = useState(0);
  const [friendRating, setFriendRating] = useState(0);

  return (
    <>
      <Question value={bill} onChange={(e) => setBill(Number(e.target.value))}>
        How much was the bill?
      </Question>

      <Question
        value={myRating}
        onChange={(e) => setMyRating(Number(e.target.value))}
      >
        How did you like the service?
      </Question>

      <Question
        value={friendRating}
        onChange={(e) => setFriendRating(Number(e.target.value))}
      >
        How did your friend like the service?
      </Question>

      <h2>
        You pay $____ (${bill} + {myRating} {friendRating})
      </h2>
    </>
  );
}

function Question({ value, onChange, children }) {
  return (
    <div>
      <form>
        <span>{children} </span>
        <input value={value} onChange={onChange} type="number" />
      </form>
    </div>
  );
}

export default App;
