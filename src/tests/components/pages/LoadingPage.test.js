import React from "react";
import { shallow } from "enzyme";
import LoadingPage from "../../../components/pages/LoadingPage";

test("expect LoadingPage to match snapshot", () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
