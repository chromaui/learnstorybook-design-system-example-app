import UserList from "./UserList";

export default {
  component: UserList,
  title: "components/UserList",
  tags: ["autodocs"],
};

export const Simple = {
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
