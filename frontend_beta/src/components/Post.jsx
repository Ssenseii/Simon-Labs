import React from 'react'

const Post = (props) => {
  return (
    <article>
      <h3>{props.tag}</h3>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>

    </article>
  )
}

export default Post