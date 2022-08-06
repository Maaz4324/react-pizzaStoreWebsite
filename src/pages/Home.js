import React from 'react'
import {Link} from 'react-router-dom'
import "../style/Home.css"

function Home() {
  return (
    <div className='home'>
        <div className="home-container">
          <h1>Pedro's Pizza</h1>
          <p>Order most delicious Pizza in the world. Fast delivery at your doorstep</p>
          <Link className='btn' to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
    </div>
  )
}

export default Home