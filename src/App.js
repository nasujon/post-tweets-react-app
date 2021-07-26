import React, {useState} from 'react'
import CreateTweet from './Components/CreateTweet';
import TweetList from './Components/TweetList';
import './Styles/master.scss';

function App() {
  const [input, setInput] = useState('');
  const [tweets, setTweets] = useState([]);
  const name = "Sujom Mahamud";
  return (
    <div className="my-app">
      <CreateTweet 
      input={input} 
      setInput={setInput} 
      tweets={tweets}
      setTweets={setTweets}
      />
      <TweetList tweets={tweets} name={name} setTweets={setTweets} />
    </div>
  );
}

export default App;