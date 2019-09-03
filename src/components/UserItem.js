import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'learnstorybook-design-system';

const Container = styled.div`
  background: #eee;
  margin-bottom: 1em;
  padding: 0.5em;
`;

const Name = styled.span`
  color: #333;
  font-size: 16px;
`;

export default ({ user: { name, avatarUrl } }) => (
  <Container>
    <Avatar src={avatarUrl} />
    <Name>{name}</Name>
  </Container>
);
