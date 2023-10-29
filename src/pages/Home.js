import { Button } from '@mui/material'
import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from '../assets/food.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer" >
        <h1>XYZ Food Website</h1>
        <p> FOOD TO FIT ANY TASTE </p>
        <Link to="/menu">
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
