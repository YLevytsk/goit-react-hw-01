import React from 'react';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.friendItem}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
    </div>
  );
};

export default FriendListItem;
