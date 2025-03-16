import React from "react";
import Profile from "./Profile/Profile";  // корректный относительный путь
import userData from "../userData.json";   // поднимаемся из components в src

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
    </div>
  );
};

export default App;


