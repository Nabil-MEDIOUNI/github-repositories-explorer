import React, { useReducer } from "react";
import axios from "axios";

import GithubContext from ".";
import GitHubReducer from "./reducer";

import {
  SEARCH_USERS,
  CLEAR_USERS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from "./types";

const State = (props) => {
  const initialState = {
    users: [],
    loading: false,
    alert: { message: null, type: null },
  };

  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  //Get Users By Value Entered
  const searchUsers = async (value) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${value}&per_page=5`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: [res.data.items, res.data.total_count],
    });
  };

  //Clear Users Button
  const clearUsers = () => {
    if (state.users.length > 0) {
      dispatch({ type: CLEAR_USERS });
    }
  };

  //Set Loading To False
  const setLoading = () => dispatch({ type: SET_LOADING });

  //Set Alert (Show Alert For 3s)
  const setAlert = (message, type) => {
    if (message.length > 0) {
      dispatch({ type: SET_ALERT, payload: { message, type } });
    }
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        alert: state.alert,
        searchUsers,
        setAlert,
        clearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

State.propTypes = {
  children: PropTypes.node.isRequired,
}

export default State;
