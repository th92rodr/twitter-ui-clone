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
              <FollowSuggestion
                name='Sauron'
                nickname='@sauron.dark.lord'
                imageUrl='https://cdn.shopify.com/s/files/1/0216/7762/products/16267369755a8bf2816a091d5f9968d59e23919b41_2000x.jpg?v=1627107251'
              />,
              <FollowSuggestion
                name='Gandalf'
                nickname='@gandalf.the.grey'
                imageUrl='https://s.yimg.com/uu/api/res/1.2/3QI8Y_gpoea6_wq35SKnjw--~B/aD03Njg7dz0xMDI0O2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/b7bf9fcc3fc10ff7785a429ca69e5113'
              />,
              <FollowSuggestion
                name='Aragorn'
                nickname='@aragorn'
                imageUrl='https://www.hypeness.com.br/1/2018/05/aragorn.jpg'
              />,
              <FollowSuggestion
                name='Legolas'
                nickname='@legolas'
                imageUrl='https://pbs.twimg.com/media/EOVKWG6X4AAtskO.jpg'
              />,
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News
                subject='Assuntos do momento na Terra Média'
                title='Batalha dos Campos de Pelennor'
              />,
              <News
                subject='Assuntos do momento na Terra Média'
                title='Taking the Hobbits to Isengard!'
              />,
            ]}
          />
          <List
            title='Talvez você curta'
            elements={[
              <News
                subject='Assuntos do momento na Terra Média'
                title='Batalha do Abismo de Helm'
              />,
              <News
                subject='Assuntos do momento na Terra Média'
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
