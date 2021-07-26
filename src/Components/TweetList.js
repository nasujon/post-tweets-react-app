import React from 'react';
import Tweet from './Tweet';
const TweetList = ({name, tweets, tweet, setTweets}) => {
  return (
    <>
    {
      tweets.map(tweet => (
        <Tweet 
        name={name} 
        tweet={tweet} 
        tweets={tweets} 
        setTweets={setTweets}
        key={tweet.id}
        />
      ))
    }

    </>
  )
}

export default TweetList
