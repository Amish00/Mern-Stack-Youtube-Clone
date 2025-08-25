import React from 'react'
import './Home.css'
import Sidebar from '../../Component/Sidebar/Sidebar'
import HomePage from '../../Component/HomePage/HomePage'

const Home = ({sideNavbar}) => {
  return (
    <div className='home'>
      <Sidebar sideNavbar={sideNavbar} />
      <HomePage />
    </div>
  )
}

export default Home
