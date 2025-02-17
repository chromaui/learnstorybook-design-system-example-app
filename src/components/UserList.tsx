import { UserData } from "../types";

import UserItem from "./UserItem";

type UserListProps = {
  users: UserData[];
};

export default function UserList({ users }: UserListProps) {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}
