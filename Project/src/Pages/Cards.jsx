import React, { useState } from 'react';
import { BsPlay } from 'react-icons/bs';
import {useNavigate} from 'react-router-dom'
function Cards(props) {
  const history = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const timestamp = props.date;
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();

  return (
    <div
      className="card"
      style={{ width: "20rem", marginBottom: '0.2rem', marginRight: '0.2rem', backgroundColor: '#3C4048', padding: 0, position: 'relative' }}
      onClick={()=>{
           history('/3dview/'+props.id)
          }} 
    >
      <img src={"https://main--velvety-praline-56c3a3.netlify.app/api/" + props.img} className="card-img-top img-fluid" alt="..." style={{ height: '200px' }}
       />
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            padding: '10px'
          }}
        >
          <BsPlay size={40} color="#fff"/>
        </div>
      )}
      <h6 style={{ marginLeft: '.3rem', fontFamily: 'initial' }}>{props.model_name}</h6>
      <div className="d-flex justify-content-between align-items-center bg-overlay-4 p-1 rounded creator-details">
        <div className="d-flex align-items-center">
          <div style={{ color: 'cyan', backgroundColor: 'black' }} className="font-weight-bold px-2 creator-icon text-uppercase rounded"> {props.creator_name.substring(0, 1)} </div>
          <div className="text-muted mx-1 creator-name text-truncate ng-star-inserted"><small>{props.creator_name} </small></div>
        </div>
        <div >
          <div id="created_date" className="text-muted ng-star-inserted"><small>{month + ' ' + day + ', ' + year} </small></div>
        </div>
      </div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          cursor: 'pointer'
        }}
      ></div>
    </div>
  )
}

export default Cards;
