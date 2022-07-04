import React, { Fragment, useContext } from 'react';
import Alert from 'react-bootstrap/Alert';

import githubContext from '../Context';

const AlertComponent = () => {
  const githubState = useContext(githubContext);
  const { alert } = githubState;

  function getAlert() {
    if (alert.message) {
      return (
        <Fragment>
          <Alert variant={alert.type}>
            <i className="fas fa-exclamation-triangle" />
            {alert.message}
          </Alert>
        </Fragment>
      );
    }

    return '';
  }

  return getAlert();
};

export default AlertComponent;
