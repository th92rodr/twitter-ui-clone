import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

interface Props {
  name: string;
  username: string;
  userAvatarUrl: string;
  text: string;
  date: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  retweets: number;
  isARetweet: boolean;
}

const Tweet: React.FC<Props> = ({
  name,
  username,
  userAvatarUrl,
  text,
  date,
  imageUrl,
  isARetweet,
  likes,
  comments,
  retweets,
}) => {
  return (
    <Container>
      {isARetweet && (
        <Retweeted>
          <RocketseatIcon />
          Saruman retweetou
        </Retweeted>
      )}

      <Body>
        <Avatar url={userAvatarUrl} />
        <Content>
          <Header>
            <strong>{name}</strong>
            <span>{username}</span>
            <Dot />
            <time>{date}</time>
          </Header>

          <Description>{text}</Description>

          {imageUrl && <ImageContent url={imageUrl} />}

          <Icons>
            <Status>
              <CommentIcon />
              {comments}
            </Status>
            <Status>
              <RetweetIcon />
              {retweets}
            </Status>
            <Status>
              <LikeIcon />
              {likes}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
