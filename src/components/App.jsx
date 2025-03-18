import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import FriendListItem from "./FriendListItem/FriendListItem"; // ✅ Импортируем новый компонент
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

const App = () => {
  return (
    <div>
      <Profile 
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

      {/* Добавляем FriendListItem для отображения отдельного друга */}
      <FriendListItem friend={friends[0]} /> 
    </div>
  );
};

export default App;



