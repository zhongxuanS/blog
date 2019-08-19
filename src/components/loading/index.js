import React from 'react';

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () =>
  <div>
    <FontAwesomeIcon icon={faSpinner} size='3x' spin></FontAwesomeIcon>
  </div >

export default Loading;
