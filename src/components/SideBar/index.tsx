import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import News from '../News';
import FollowSuggestion from '../FollowSuggestion';
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder='Buscar no Twitter' />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title='Talvez você curta'
            elements={[
              <FollowSuggestion name='Rocketseat' nickname='@rocketseat' />,
              <FollowSuggestion name='freeCodeCamp' nickname='@freeCodeCamp' />,
              <FollowSuggestion name='React' nickname='@reactjs' />,
              <FollowSuggestion name='Node.js' nickname='@nodejs' />,
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News
                subject='Assuntos do momento no Brasil'
                title='Bootcamp da Rocketseat'
              />,
              <News
                subject='Assuntos do momento no Brasil'
                title='Certificações da FreeCodeCamp'
              />,
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News
                subject='Assuntos do momento no Brasil'
                title='Hackathon Call for Code'
              />,
              <News
                subject='Assuntos do momento no Brasil'
                title='#styled-components'
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
