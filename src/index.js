import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { history } from "./routers/AppRouter";
import App from "./App";
import configureStore from "./store/configureStore";
import { login, logout } from "./actions/auth";
import * as serviceWorker from "./serviceWorker";
import { firebase } from "./firebase/firebase";
import LoadingPage from "./components/pages/LoadingPage";

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("root"));

serviceWorker.unregister();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
