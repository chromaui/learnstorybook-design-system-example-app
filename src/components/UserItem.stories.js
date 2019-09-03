import React from 'react';

import UserItem from './UserItem';

export default {
  component: UserItem,
  title: 'components/UserItem',
};

export const simple = () => (
  <UserItem
    user={{ name: 'Dominic Nyugen', avatarUrl: 'https://avatars2.githubusercontent.com/u/263385' }}
  ></UserItem>
);
