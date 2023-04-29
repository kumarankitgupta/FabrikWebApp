import React, { useEffect, useReducer, useRef, useState } from 'react';
import Navbar from './Navbar';
import './styles.css';
import axios from 'axios'

function FileUpload({ onUpload }) {
  const in1 = useRef(null);
  const in2 = useRef(null);
  const [creatorName, setCreatorName] = useState('');
  const [modelName, setModelName] = useState('');
  const [file,setfile] = useState(null); 
  const [img,setimg] = useState(null)
  const handleSubmit = async (event) => {
    if(creatorName.trim() != '' && modelName.trim() != '' && file != null && img != null){
      const formData = new FormData();
      formData.append("file", file);
      formData.append("img", img);
      formData.append('name',creatorName)
      formData.append('modelname',modelName)
    
        const response = await axios.post(
          "http://localhost:3000/senddata",
          formData,
          {
            headers:{
              'Content-Type':'multipart/form-data'
            }
          }
        ).then((response)=>{
          console.log(response.data);
          alert('Model Uploaded SuccessFully')
          in1.current.value = "";
          in2.current.value = "";
          setCreatorName('');
          setModelName('')
        }).catch((error)=>{
          console.log(error)
        })
    }else{
      alert('Fill All The Values!')
    }
  };
  return (
    <>
    <Navbar/>
    <div className="file-upload-container">
      <div className="file-upload-box">
        <h1>Upload your 3D Model</h1>
        <div className="input-container">
          <label htmlFor="creatorName">Creator Name:</label>
          <input
            type="text"
            id="creatorName"
            value={creatorName}
            onChange={(event) => setCreatorName(event.target.value)}
            style={{ color: '#0ff' }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="modelName">Name of Model:</label>
          <input
            type="text"
            id="modelName"
            value={modelName}
            onChange={(event) => setModelName(event.target.value)}
            style={{ color: '#0ff' }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="fileInput">Choose a 3D model:</label>
          <input
            ref={in1}
            type="file"
            id="fileInput"
            accept=".glb,.gltf,.fbx"
            onChange={(event) => setfile(event.target.files[0])}
            style={{ color: '#0ff' }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="fileInput">Upload  thumbnail</label>
          <input
            ref={in2}
            type="file"
            id="fileInput"
            accept=".png,.jpg,.gif"
            onChange={(event) => setimg(event.target.files[0])}
            style={{ color: '#0ff' }}
          />
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
        <div className="cube-container">
          <div className="cube"></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FileUpload;
