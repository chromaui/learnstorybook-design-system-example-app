import type { Meta, StoryObj } from "@storybook/react";

import UserList from "./UserList";

const meta = {
  component: UserList,
  title: "components/UserList",
  tags: ["autodocs"],
} satisfies Meta<typeof UserList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    users: [
      {
        id: "1",
        name: "Dominic Nyugen",
        avatarUrl: "https://avatars2.githubusercontent.com/u/263385",
      },
      {
        id: "2",
        name: "Tom Coleman",
        avatarUrl: "https://avatars2.githubusercontent.com/u/132554",
      },
    ],
  },
};
