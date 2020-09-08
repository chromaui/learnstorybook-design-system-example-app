import React from "react";

import UserItem from "./UserItem";

export default {
  component: UserItem,
  title: "components/UserItem",
};

// to copy to pull request
const Template = (args) => <UserItem {...args} />;

export const simple = Template.bind({});
simple.args = {
  user: {
    name: "Dominic Nyugen",
    avatarUrl: "https://avatars2.githubusercontent.com/u/263385",
  },
};