import PropTypes from "prop-types";
import styled from "@emotion/styled";
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

export default function UserItem({ user: { name, avatarUrl } }) {
  return (
    <Container>
      <Avatar src={avatarUrl} />
      <Name>{name}</Name>
    </Container>
  );
}

UserItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
};
