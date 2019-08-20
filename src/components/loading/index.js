import React from 'react';

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Loading extends React.Component {
  render() {
    return (
      <FontAwesomeIcon icon={faSpinner} size='3x' spin />
    );
  }
}

export default Loading;
