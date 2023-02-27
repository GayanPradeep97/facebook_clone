import React from 'react'
import './PostFlan.css'
import Addpost from '../addpost/Addpost.jsx'
import Post from '../postss/Post'

function PostFlan() {
  return (
    <div className='postflan'>
      <Addpost/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default PostFlan