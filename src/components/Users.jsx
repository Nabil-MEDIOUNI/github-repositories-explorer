import React, { useState, Fragment, useContext } from "react";

import UserCard from "./UserCard";
import Spinner from "./Shared/Spinner";

import githubContext from "./Context";


const Users = () => {
  const githubState = useContext(githubContext);
  const [getAllrepos, setAllRepos] = useState([]);

  const { users, loading } = githubState;

  function getUsersCards() {
    if (loading) {
      return <Spinner />;
    }

    return (
      <div>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            getAllrepos={getAllrepos}
            setAllRepos={setAllRepos}
          />
        ))}
      </div>
    );
  }

  return <Fragment>{getUsersCards()}</Fragment>;
};

export default Users;
