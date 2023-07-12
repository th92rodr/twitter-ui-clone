import React from 'react';

import Tweet from '../Tweet';
import { Container, Tab, Tweets } from './styles';
import SarumanProfile from '../../assets/saruman_profile.jpg';
import SarumanTweet from '../../assets/saruman_tweet.jpg';
import SauronProfile from '../../assets/sauron_profile.jpg';
import SauronTweet from '../../assets/sauron_tweet.webp';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet
          name={'Saruman'}
          username={'@saruman.the.white'}
          userAvatarUrl={SarumanProfile}
          // prettier-ignore
          text={"A new power is rising. Its victory is at hand. This night the land will be stained with the blood of Rohan. March to Helm's Deep. Leave none alive. To war!"}
          date={'3 March - 3019 of the Third Age'}
          imageUrl={SarumanTweet}
          isARetweet={false}
          likes={1000}
          comments={555}
          retweets={245}
        />
        <Tweet
          name={'Saruman'}
          username={'@saruman.the.white'}
          userAvatarUrl={SarumanProfile}
          // prettier-ignore
          text={'I gave you the chance of aiding me willingly, but you have elected the way of pain!'}
          date={'10 July - 3018 of the Third Age'}
          isARetweet={false}
          likes={220}
          comments={35}
          retweets={10}
        />
        <Tweet
          name={'Sauron'}
          username={'@sauron.dark.lord'}
          userAvatarUrl={SauronProfile}
          // prettier-ignore
          text={'One ring to rule them all, one ring to find them, One ring to bring them all, and in the darkness bind them; In the Land of Mordor where the shadows lie.'}
          date={'1600 of the Second Age'}
          imageUrl={SauronTweet}
          isARetweet={true}
          likes={2450}
          comments={65}
          retweets={50}
        />
      </Tweets>
    </Container>
  );
};

export default Feed;
