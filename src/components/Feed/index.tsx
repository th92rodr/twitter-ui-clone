import React from 'react';

import Tweet from '../Tweet';
import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet
          name={'Saruman'}
          username={'@saruman.the.white'}
          // prettier-ignore
          userAvatarUrl={'https://i.pinimg.com/originals/a3/b7/a7/a3b7a7fab3ff446687c9e72156079953.jpg'}
          // prettier-ignore
          text={"A new power is rising. Its victory is at hand. This night the land will be stained with the blood of Rohan. March to Helm's Deep. Leave none alive. To war!"}
          date={'3 March - 3019 of the Third Age'}
          imageUrl={'https://memegenerator.net/img/images/15264063.jpg'}
          isARetweet={false}
          likes={10000}
          comments={5555}
          retweets={2456}
        />
        <Tweet
          name={'Saruman'}
          username={'@saruman.the.white'}
          // prettier-ignore
          userAvatarUrl={'https://i.pinimg.com/originals/a3/b7/a7/a3b7a7fab3ff446687c9e72156079953.jpg'}
          // prettier-ignore
          text={'I gave you the chance of aiding me willingly, but you have elected the way of pain!'}
          date={'10 July - 3018 of the Third Age'}
          isARetweet={false}
          likes={22}
          comments={1}
          retweets={10}
        />
        <Tweet
          name={'Sauron'}
          username={'@sauron.dark.lord'}
          // prettier-ignore
          userAvatarUrl={'https://cdn.shopify.com/s/files/1/0216/7762/products/16267369755a8bf2816a091d5f9968d59e23919b41_2000x.jpg?v=1627107251'}
          // prettier-ignore
          text={'One ring to rule them all, one ring to find them, One ring to bring them all, and in the darkness bind them; In the Land of Mordor where the shadows lie.'}
          date={'1600 of the Second Age'}
          // prettier-ignore
          imageUrl={'https://i1.wp.com/hnentertainment.co/wp-content/uploads/2019/03/Lord-of-the-Rings-Fellowship-of-the-Ring-Sauron-One-Ring.jpg'}
          isARetweet={true}
          likes={24500}
          comments={655}
          retweets={50}
        />
      </Tweets>
    </Container>
  );
};

export default Feed;
