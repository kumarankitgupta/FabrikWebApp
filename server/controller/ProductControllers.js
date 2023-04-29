const Model = require("../Model/MyProducts");
const { saveModelData, getModelsfromDb, getModelName } = require("../Services/productServices");

const saveProducts = (req,res)=>{
    const Myfile = req.files;
    const file = Myfile.file;
    const img = Myfile.img;
    const fname = file.name;
    const iname = img.name;
    const cname = req.body.name;
    const mname = req.body.modelname;
    console.log(img)
    console.log(file)
    console.log(req.body.name);
    console.log(__dirname)
    let uploadpath = process.cwd()+'/upload/3dModels/'+ fname;
    console.log(uploadpath)
    file.mv(uploadpath,(err)=>{
       if(err){
            res.status(400).send(err);
            return;
       }
    })
    uploadpath = process.cwd()+'/upload/image/' + iname;
    img.mv(uploadpath,(err)=>{
        if(err){
            res.status(400).send(err);
            return;
        }
     })
     saveModelData(cname,mname,fname,iname)
     .then((data)=>{
         console.log(data)
         res.send('got')
     })
     .catch((err)=>{
        res.status(400).send('Something went Wrong')
        return
     })
    
}


const getModels = (req,res)=>{
    getModelsfromDb()
    .then((data)=>{
        res.send(data)
    }) .catch((err)=>{
        res.status(400).send('Something went Wrong')
        return
     })
}


const getmodelname = (req,res)=>{
    const {id} = req.query;
    getModelName(id)
    .then((data)=>{
        res.json({filename:data})
    }).catch(()=>{
        res.status(400).send('Error')
    })
    
}
module.exports = {saveProducts,getModels,getmodelname}
