import { useState } from "react";

export default function AddFriendForm({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!friendName || !friendImage) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name: friendName,
      image: `${friendImage}${
        friendImage === "https://i.pravatar.cc/48" ? `?=${id}` : ""
      }`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setFriendName("");
    setFriendImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="add-friend-form" onSubmit={handleSubmit}>
      <label htmlFor="friend">👫 Friend name</label>
      <input
        type="text"
        id="friend"
        name="friend"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />

      <label htmlFor="friend-image">🖼️ Image URL</label>
      <input
        type="text"
        id="friend-image"
        name="friend-image"
        value={friendImage}
        onChange={(e) => setFriendImage(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}
