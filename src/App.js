import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [myRating, setMyRating] = useState(0);
  const [friendRating, setFriendRating] = useState(0);

  return (
    <>
      <span>How much was the bill?</span>
      <UserInput
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <span>How did you like the service?</span>
      <UserSelect
        value={myRating}
        onChange={(e) => setMyRating(Number(e.target.value))}
      />

      <span>How did your friend like the service?</span>
      <UserSelect
        value={friendRating}
        onChange={(e) => setFriendRating(Number(e.target.value))}
      />

      <h2>
        You pay $____ (${bill} + {myRating} {friendRating})
      </h2>
    </>
  );
}

function UserInput({ value, onChange }) {
  return (
    <div>
      <form>
        <input value={value} onChange={onChange} type="number" />
      </form>
    </div>
  );
}

function UserSelect({ value, onChange }) {
  return (
    <>
      <select value={value} onChange={onChange}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely Amazing! (20%)</option>
      </select>
    </>
  );
}

export default App;
