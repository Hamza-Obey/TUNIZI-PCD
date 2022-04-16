import React, { useState } from 'react'
import Sidebar1 from '../Components/Sidebar1'
import Navbar from '../Components/Navbar'
import Graph from '../Components/PieChart'
import AreaChart from '../Components/AreaChart'
import Stat from '../Components/Stat'


function Home() {

  return (
    <div className='home-container'>
      <div>
      <Navbar />
      </div>
      <div className='box1'>
        <Sidebar1 />
      </div>
      <div className='box2'>
        <AreaChart />
        <hr style={{background:" 1.5px solid black",marginRight:"650px",width:"600px"}}/>
        <Graph />
      </div>
      <div className='box3'>
        <Stat/>
      </div>








    </div>
  )
}

export default Home