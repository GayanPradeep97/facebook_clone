import React from 'react'
import './Home.css'
import LeftFlan from '../components/left_flane/LeftFlan'
import NavBar from '../components/Navigation/NavBar'
import PostFlan from '../components/post _flane/PostFlan'
import RightFlan from '../components/right_flane/RightFlane'

function Home() {
  return (
    <><NavBar />
    <div className="bottomsction">
    <LeftFlan />
    <PostFlan/>
    <RightFlan/>
    </div>
    </>
  )
}

export default Home

