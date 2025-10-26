import "./FriendsSection.css";
import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";
import { useState } from "react";

export default function FriendsSection({
  friends,
  setFriends,
  selectedFriend,
  setSelectedFriend,
}) {
  const [isAddFriendFormOpen, setIsAddFriendFormOpen] = useState(false);

  function handleAddFriend(newfriend) {
    setFriends((friends) => [...friends, newfriend]);
    setIsAddFriendFormOpen(false);
  }

  return (
    <div className="friends-section">
      <ul className="friends-list">
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
          />
        ))}
      </ul>
      {isAddFriendFormOpen && <AddFriendForm onAddFriend={handleAddFriend} />}
      <button
        className="close-button"
        onClick={() => setIsAddFriendFormOpen((isOpen) => !isOpen)}
      >
        {isAddFriendFormOpen ? "Close" : "Add friend"}
      </button>
    </div>
  );
}
