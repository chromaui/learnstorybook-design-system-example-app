import React from "react";

import UserItem from "./UserItem";

export default function UserList({ users }) {
  return (
    <>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </>
  );
}
