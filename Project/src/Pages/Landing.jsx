import React, { useState,useEffect } from 'react'
import Cards from './Cards'
import Navbar from './Navbar'
import LoadingCube from './LoadingCube';
import './land.css'
import axios from 'axios';
function Landing() {
    var [arr,setarr] = useState([]);
    useEffect(()=>{
      axios.get('https://fabreactapplication.onrender.com/getdata')
      .then((response)=>{
        setarr(response.data)
      })
    },[])
  return (
    <>
    <Navbar/>
    <div className='row center parent-element flex-left' style={{marginTop:'80px',marginLeft:0,marginRight:0,padding:'2%' }}>
        {arr.length === 0?<LoadingCube/>:arr.map((val,index)=>{
            return (<Cards key={index} img={val.ThumbNail_Name} model_name={val.Model_name} creator_name={val.Creator_Name} date={val.dateCreated} id={val._id}/>
            )
        })}
        
    </div>
    </>
  )
}

export default Landing
