import React from "react";
import { shallow } from "enzyme";
import { DashboardPage } from "../../../components/pages/DashboardPage";

test("should render the DashboardPage correctly", () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
