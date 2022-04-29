import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar1 from '../Components/Sidebar1'
import Navbar from '../Components/Navbar'
import Graph from '../Components/PieChart'
import AreaChart from '../Components/AreaChart'
import Stat from '../Components/Stat'
import background from "../Assets/Images/background.jpg"
import axios from"axios"
import '../Assets/Home.css'
import BarChart from '../Components/BarChart'







function Home() {
    const[prediction,setPrediction]=useState({})
    const[desc,setDesc]=useState("")

    const { id } = useParams()  

    useEffect(() => {
      getProducts();
      getDescription();
    },[]);
  
    const getProducts = () => {
      setPrediction({})
      axios.get(`http://localhost:5000/produit/predict/${id}`, {
        headers: {
          "Content-Type": "application/json",
  
        },
      })
        .then((result) => {
          console.log(result.data.freq[0][0]);
         
          setPrediction(result.data) ;
          
        })
        .catch((err) => {
          console.error("error:${error}")
  
        });
  
    }

    const getDescription = () => {
      setPrediction({})
      axios.get(`http://localhost:5000/produit/get/${id}`, {
        headers: {
          "Content-Type": "application/json",
  
        },
      })
        .then((result) => {
          
         
          setDesc(result.data.desc) ;
          
        })
        .catch((err) => {
          console.error("error:${error}")
  
        });
  
    }
    

  return (
    <div >
      <div style={{
        backgroundImage: "url(" + background + ")",
        backgroundSize: "cover",
        height: "95%",
        display: 'block',
        color: "#f5f5f5",
        backgroundRepeat: "no-repeat",

        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        margin: 0,
        overflow: "hidden"
      }} >

        <Navbar />
        <Sidebar1 setDesc={setDesc} />

        <div className='stat11'>
          <fieldset style={{ marginBottom: "-25px" }} class="border p-2">
            <legend  className="w-auto descriptiontitle "> Product Description : </legend>
            <p className='description1'> {desc} </p>
          </fieldset>
          <Stat prediction={prediction} />
        </div>
      </div>
      <div className='home-container'>
        <Graph prediction={prediction} />

        <AreaChart />
        { 
        Object.values(prediction).length!==0 ?

        <BarChart prediction={prediction}/>
        :
        ""
        }



      </div>
      

    </div>


  )
}

export default Home