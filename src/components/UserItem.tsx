import type { UserData } from "../types";

import styled from "@emotion/styled";

type UserItemProps = {
  user: UserData;
};

const Container = styled.div`
  background: #eee;
  margin-bottom: 1em;
  padding: 0.5em;
`;

const Avatar = styled.img`
  border: 1px solid black;
  width: 30px;
  height: 30px;
  margin-right: 0.5em;
`;

const Name = styled.span`
  color: #333;
  font-size: 16px;
`;

export default function UserItem({ user: { avatarUrl, name } }: UserItemProps) {
  return (
    <Container>
      <Avatar src={avatarUrl} alt="user avatar" />
      <Name>{name}</Name>
    </Container>
  );
}
