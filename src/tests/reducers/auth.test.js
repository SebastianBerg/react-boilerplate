import authReducer from "../../reducers/auth";

test("should add user uid to state", () => {
  const user = { uid: "test" };
  const action = {
    type: "LOGIN",
    uid: user.uid
  };
  const state = authReducer(user, action);
  expect(state.uid).toEqual(action.uid);
});

test("should remove user uid from state", () => {
  const user = { uid: "test" };
  let action = {
    type: "LOGOUT"
  };
  const state = authReducer(user, action);
  expect(state).toEqual({});
});
