import "./Friend.css";

export default function Friend({ friend, selectedFriend, setSelectedFriend }) {
  function handleSelectFriend() {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend.id ? null : friend
    );
  }

  return (
    <li
      className={`friend ${
        selectedFriend?.id === friend.id ? "friend-active" : ""
      }`}
    >
      <img
        className="friend-image"
        src={`${friend.image}`}
        alt={`${friend.name}`}
      />
      <div className="info">
        <p className="name">{friend.name}</p>
        {friend.balance === 0 && (
          <p className="status">You and friend are even</p>
        )}

        {friend.balance > 0 && (
          <p className="status" style={{ color: "green" }}>
            {friend.name} owes you {friend.balance}$
          </p>
        )}

        {friend.balance < 0 && (
          <p className="status" style={{ color: "red" }}>
            You owe {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}
      </div>
      <button onClick={handleSelectFriend}>
        {selectedFriend?.id === friend.id ? "Close" : "Select"}
      </button>
    </li>
  );
}
