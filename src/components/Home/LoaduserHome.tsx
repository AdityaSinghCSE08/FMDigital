import * as React from "react";
import UserHome from './Dashboard';

const LoadUserHome = () => {
  // Create stub data for userData
  const stubUserData = {
    users_id: '12345',
    // Add any other properties that the Dashboard component might need from userData
  };

  return (
    <div>
      <UserHome userData={stubUserData} />
    </div>
  );
};

export default LoadUserHome;
