const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/ThreeDModels");
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { saveProducts, getModels, getmodelname } = require('./controller/ProductControllers');
const app = express();
app.use(cors())
app.use(express.static('upload/image'))
app.use(express.static('upload/3dModels'))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(fileUpload())
app.post('/senddata',saveProducts)
app.get('/getdata',getModels)
app.get('/modelname',getmodelname)
app.listen('3000',()=>{
    console.log('server Started')
})