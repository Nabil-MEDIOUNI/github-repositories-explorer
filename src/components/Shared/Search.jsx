import React, { Fragment, useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Alert from './Alert';

import githubContext from '../../Context';

import CLEAR_ICON from '../../assets/clear-icon.png';

const Search = () => {
  const githubState = useContext(githubContext);
  const { setAlert, users, clearUsers, searchUsers } = githubState;
  const [getValue, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!getValue) {
      setAlert(' Enter Something Please!', 'danger');
    } else {
      searchUsers(getValue);
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const clearSearch = () => {
    setValue('');
    clearUsers();
  };

  function getClearButton() {
    if (getValue) {
      return (
        <button
          title="clear"
          className="clear-button"
          type="button"
          block
          onClick={clearSearch}
        >
          <img className="clear-icon" src={CLEAR_ICON} alt="" />
        </button>
      );
    }

    return '';
  }

  function getShowingUsersMessage() {
    if (users.length > 0) {
      return (
        <h6 className="showing-users-message">{`Showing users for "${getValue}"`}</h6>
      );
    }

    return '';
  }
  return (
    <>
      <Alert />
      <Form className="searchForm" onSubmit={onSubmit}>
        <Form.Group>
          <Form.Control
            className="searchInput"
            type="text"
            placeholder="Enter username"
            size="lg"
            onChange={onChange}
            value={getValue}
            autoCapitalize={false}
            autoCorrect={false}
            autoComplete={false}
          />
          {getClearButton()}
        </Form.Group>
        <div className="searchButtons">
          <Button type="submit" block>
            Search
          </Button>
        </div>
      </Form>
      <div>{getShowingUsersMessage()}</div>
    </>
  );
};

export default Search;
