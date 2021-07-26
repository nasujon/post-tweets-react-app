import React, {useState} from 'react'

const Tweet = ({message, name}) => {

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const lickHandler = ()=>{
    setLike(like + 1)
  }
  const dislikeHandler = ()=>{
    setDislike(dislike + 1)
  }

  return (

    <>
      <div className="tweet">
        <h5>{name}</h5>
        <p>{message}</p>
        <ul>
          <li>Liked: {like}</li>
          <li>Disliked: {dislike}</li>
        </ul>
        <div className="tweet-btns">
          <button onClick={lickHandler} className="like">Like</button>
          <button onClick={dislikeHandler} className="dislike">Dislike</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </>
  )
}

export default Tweet
