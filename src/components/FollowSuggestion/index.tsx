import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
  name: string;
  nickname: string;
  imageUrl: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname, imageUrl }) => {
  return (
    <Container>
      <div>
        <Avatar url={imageUrl} />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>Follow</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
