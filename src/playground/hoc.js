// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>This info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info, Please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// requireAuthentication
const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <p>You are logged in, good for you!</p>
      ) : (
        <p>You better get yourself an account and log in motherfucker!</p>
      )}
      <WrappedComponent {...props} />
    </div>
  );
};

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="There are the details" />,
//   document.getElementById("root")
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="There are the details" />,
  document.getElementById("root")
);

const AdminInfo = withAdminWarning(Info);

export default Info;
