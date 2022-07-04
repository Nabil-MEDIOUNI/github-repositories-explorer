import React, { useEffect, Fragment, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

import ReposComp from "./RepoCard";

import ARROW_ICON from "../assets/arrow-icon.png";

const UsersItems = ({ user, getAllrepos, setAllRepos }) => {
  const [expandCard, setExpandCard] = useState({
    cardId: "",
    expanded: false,
  });

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user.login}/repos`)
      .then(({ data }) => {
        setAllRepos((oldArray) => [...oldArray, ...data]);
      });
  }, [setAllRepos, user.login]);

  const onExpandCard = (id) => {
    setExpandCard({
      cardId: id,
      expanded: !expandCard.expanded,
    });
  };
  
  function getUserRepos(id) {
    if (expandCard.expanded && expandCard.cardId === id) {
      const filteredRepos = getAllrepos.filter(
        ({ owner }) => user.id === owner.id
      );
      console.log("filteredRepos", filteredRepos);
      return (
        <>
          {filteredRepos.map((repo) => (
            <ReposComp key={repo.id} repo={repo} />
          ))}
        </>
      );
    }

    return "";
  }

  return (
    <Fragment>
      <div className="userCard">
        <img className="userImage" src={user.avatar_url} alt="" />
        <h4 className="userName">{user.login}</h4>
        <button
          className="arrow-icon-button"
          type="button"
          onClick={() => onExpandCard(user.id)}
        >
          <img
            title="expand"
            className={`arrow-icon ${
              expandCard.expanded && "reverse-arrow-icon"
            }`}
            src={ARROW_ICON}
            alt=""
          />
        </button>
      </div>
      {getUserRepos(user.id)}
    </Fragment>
  );
};

UsersItems.propTypes = {
  setAllRepos: PropTypes.func,
  getAllrepos: PropTypes.any,
  user: PropTypes.any,
}

UsersItems.defaultProps = {
  setAllRepos: null,
  getAllrepos: undefined,
  user: undefined,
}

export default UsersItems;
