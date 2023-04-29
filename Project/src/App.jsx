import React from 'react'
import Landing from './Pages/Landing'
import FileUpload from './Pages/UploadComponent'
import { Router, Routes,Route } from 'react-router-dom'
import ThreeDview from './Pages/ThreeDview'
import Test from './Pages/Test'

function App() {
  return (
      <Routes>
        <Route exact path='/' Component={Landing} />
        <Route exact path='/upload' Component={FileUpload} />
        <Route exact path='/3dview/:id' Component={ThreeDview}/>
      </Routes>
     
  )
}

export default App