import React from "react";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendItem}>
      {/* Аватар друга */}
      <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />

      {/* Имя друга */}
      <p className={styles.name}>{name}</p>

      {/* Текст статуса без кружка */}
      <p className={isOnline ? styles.onlineText : styles.offlineText}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;


