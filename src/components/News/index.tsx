import React from 'react';

import { Container } from './styles';

interface Props {
  subject: string;
  title: string;
}

const News: React.FC<Props> = ({ subject, title }) => {
  return (
    <Container>
      <span>{subject}</span>
      <strong>{title}</strong>
    </Container>
  );
};

export default News;
