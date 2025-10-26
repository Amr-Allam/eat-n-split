import "./App.css";
import { useState } from "react";
import FriendsSection from "./FriendsSection";
import SplitBillForm from "./SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <div className="app">
      <FriendsSection
        friends={friends}
        setFriends={setFriends}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
      {selectedFriend && (
        <SplitBillForm
          setFriends={setFriends}
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
      )}
    </div>
  );
}

export default App;
