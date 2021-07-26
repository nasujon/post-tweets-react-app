import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const CreateTweet = ({input, setInput, tweets, setTweets}) => {

  const inputHandler = (e)=>{
    setInput(e.target.value)
  }


  const submitHandler = (e) =>{
    e.preventDefault();
    setTweets([...tweets, {message: input, id: uuidv4()}]);
    setInput('');

  }

  return (
    <div className="create-tweet">
      <p>Create One</p>
      <form onSubmit={submitHandler}>
        <textarea cols="30" onChange={inputHandler} rows="5"></textarea>
        <button className="postBtn">Post</button>
      </form>
    </div>
  )
}

export default CreateTweet
