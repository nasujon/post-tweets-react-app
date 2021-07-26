import React from 'react'

const CreateTweet = ({input, setInput, tweets, setTweets}) => {

  const inputHandler = (e)=>{
    setInput(e.target.value)
  }


  const submitHandler = (e) =>{
    e.preventDefault();
    setTweets([...tweets, {message: input}]);
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
