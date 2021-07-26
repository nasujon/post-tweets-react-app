import React from 'react';
import Tweet from './Tweet';
const TweetList = ({name, tweets}) => {
  return (
    <>
    {
      tweets.map(tweet => (
        <Tweet name={name} message={tweet.message} />
      ))
    }

    </>
  )
}

export default TweetList
