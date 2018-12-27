import { login, logout } from "../../actions/auth";

test("should setup login action object", () => {
  const action = login("test");
  expect(action).toEqual({
    type: "LOGIN",
    uid: "test"
  });
});

test("should setup logout action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});
