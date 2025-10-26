import { useState } from "react";

export default function SplitBillForm({
  setFriends,
  selectedFriend,
  setSelectedFriend,
}) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const friendExpense = bill ? bill - yourExpense : "";
  const [payer, setPayer] = useState("You");

  function handleSplitBillForm(e) {
    e.preventDefault();

    if (!bill || !yourExpense) return;

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              balance:
                payer === "You"
                  ? friend.balance + friendExpense
                  : friend.balance - friendExpense,
            }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <form className="split-bill-form" onSubmit={handleSplitBillForm}>
      <h2
        style={{
          gridColumn: "1/3",
        }}
      >
        SPLIT BILL WITH {selectedFriend.name.toUpperCase()}
      </h2>
      <label htmlFor="bill">💰 Bill value</label>
      <input
        type="number"
        name="bill"
        id="bill"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="your-expense">🕴 Your expense</label>
      <input
        type="number"
        name="your-expense"
        id="your-expense"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > bill ? yourExpense : Number(e.target.value)
          )
        }
      />

      <label htmlFor="friend-expense">👫 {selectedFriend.name}'s expense</label>
      <input
        type="number"
        name="friend-expense"
        id="friend-expense"
        disabled
        value={friendExpense}
      />

      <label htmlFor="payer">🤑 Who is paying the bill</label>
      <select
        name="payer"
        id="payer"
        value={payer}
        onChange={(e) => setPayer(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button>Split bill</button>
    </form>
  );
}
