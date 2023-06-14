import PropTypes from "prop-types";
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

UserList.propTypes = {
  users: PropTypes.arrayOf(UserItem.propTypes.user),
};
