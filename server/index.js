const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ialwaysbeachiever:J0oHoqK95zU98Fv3@cluster0.elpn1z4.mongodb.net/ThreeDModels");
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
app.listen(process.env.PORT || 3000,()=>{
    console.log('server Started at port '+ process.env.PORT)
})
