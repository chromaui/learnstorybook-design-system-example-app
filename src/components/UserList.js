import React from 'react';

import UserItem from './UserItem';

export default ({ users }) => (
  <>
    {users.map(user => (
      <UserItem key={user.id} user={user} />
    ))}
  </>
);
