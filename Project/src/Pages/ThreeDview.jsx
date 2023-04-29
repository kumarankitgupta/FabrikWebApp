import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls } from '@react-three/drei';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import LoadingCube from './LoadingCube';


function Model(props) {
  
  const { scene } = useGLTF('https://fabreactapplication.onrender.com/'+props.param);
  return <primitive object={scene} {...props} />;
}

function ThreeDview() {
  const {id} = useParams();
  const [fname,setfname] = useState(undefined);
  useEffect(()=>{
    axios.get(`https://fabreactapplication.onrender.com/modelname?id=${id}`)
    .then((response)=>{
      console.log(response.data.filename)
      setfname(response.data.filename)
    })
  },[])
  return (
    <>
    {typeof (fname) === 'undefined' ?<LoadingCube/>:
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: 'absolute' }}>
    <color attach="background" args={['#DDDDDD']} />
    <OrbitControls enablePan enableZoom enableRotate />
    <Stage environment="sunset">
      <Model scale={0.029999} param={fname} />
    </Stage>
  </Canvas>
  }
  </>
  );
}

export default ThreeDview;
