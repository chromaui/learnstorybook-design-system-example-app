import type { Meta, StoryObj } from "@storybook/react";

import UserItem from "./UserItem";

const meta = {
  component: UserItem,
  title: "components/UserItem",
  tags: ["autodocs"],
} satisfies Meta<typeof UserItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    user: {
      id: "1",
      name: "Dominic Nyugen",
      avatarUrl: "https://avatars2.githubusercontent.com/u/263385",
    },
  },
};
