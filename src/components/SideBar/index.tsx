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
import SauronProfile from '../../assets/sauron_profile.jpg';
import GandalfProfile from '../../assets/gandalf_profile.jpg';
import AragornProfile from '../../assets/aragorn_profile.jpg';
import LegolasProfile from '../../assets/legolas_profile.jpg';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder='Search' />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title='Who to follow'
            elements={[
              <FollowSuggestion
                name='Sauron'
                nickname='@sauron.dark.lord'
                imageUrl={SauronProfile}
              />,
              <FollowSuggestion
                name='Gandalf'
                nickname='@gandalf.the.grey'
                imageUrl={GandalfProfile}
              />,
              <FollowSuggestion
                name='Aragorn'
                nickname='@aragorn'
                imageUrl={AragornProfile}
              />,
              <FollowSuggestion
                name='Legolas'
                nickname='@legolas'
                imageUrl={LegolasProfile}
              />,
            ]}
          />
          <List
            title='You might like'
            elements={[
              <News
                subject='Trending in Middle Earth'
                title='Battle of the Pelennor Fields'
              />,
              <News
                subject='Trending in Middle Earth'
                title='Taking the Hobbits to Isengard!'
              />,
            ]}
          />
          <List
            title='You might like'
            elements={[
              <News
                subject='Trending in Middle Earth'
                title="Battle of Helm's Deep"
              />,
              <News
                subject='Trending in Middle Earth'
                title='#one.ring.to.rule.them.all'
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
