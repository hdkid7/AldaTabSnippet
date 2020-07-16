import React from "react";
import { Redirect } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const RedirectMaker = ({ tabName }) => {
  return (
    <React.Fragment>
      <Redirect exact from={`/view-/${tabName}`} to={`/${tabName}`} />
      {console.log(`/view-/${tabName}`)}
    </React.Fragment>
  );
};

export default RedirectMaker;
