import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, useProgress } from '@react-three/drei';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import LoadingCube from './LoadingCube';
import './progress.css'
import Navbar from './Navbar';
function Model(props) {
  const { scene } = useGLTF('https://main--velvety-praline-56c3a3.netlify.app/api/'+props.param);
  return <primitive object={scene} {...props} />;
}


function Progress({ progress }) {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        <span className="progress-text">{progress}%</span>
      </div>
    </div>
  );
}
function ThreeDview() {
  const { id } = useParams();
  const [fname, setfname] = useState(undefined);
  useEffect(() => {
    axios.get(`https://fabreactapplication.onrender.com/modelname?id=${id}`)
      .then((response) => {
        console.log(response.data.filename)
        setfname(response.data.filename)
      })
  }, [])

  const { progress } = useProgress();
  
  return (
    <>
      <Navbar/>
      {typeof (fname) === 'undefined' ?
        <LoadingCube /> :
        <>
          <Progress progress={progress} />
          <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: 'absolute' }}>
            <color attach="background" args={['#DDDDDD']} />
            <OrbitControls enablePan enableZoom enableRotate />
            <Stage environment="sunset">
              <Model scale={0.029999} param={fname} />
            </Stage>
          </Canvas>
        </>
      }
    </>
  );
}

export default ThreeDview;
