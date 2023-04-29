const Model = require("../Model/MyProducts");

async function saveModelData(CreatorName,ModelName,ModelFileName,ModelImageName){
    try{
        const product = new Model({
            Model_name:ModelName,
            Creator_Name:CreatorName,
            ModelFile_Name:ModelFileName,
            ThumbNail_Name:ModelImageName,
            dateCreated: new Date()
        })
        const data = await product.save();
        console.log(data)
        return data
    }catch(err){
        console.log(err)
        console.log('SomeThing Went Wrong');
        return new Error('SomeThing Went Wrong')
    }
}

async function getModelsfromDb(){
    try{
        const data = await Model.find()
        return data
    }catch(err){
        console.log(err)
        console.log('SomeThing Went Wrong');
        return new Error('SomeThing Went Wrong')
    }
}

async function getModelName(id){
    try{
        const data = await Model.findOne({_id:id})
        console.log(data.ModelFile_Name)
        return data.ModelFile_Name;
    }catch(err){
        console.log(err)
        console.log('SomeThing Went Wrong');
        return new Error('SomeThing Went Wrong')
    }
}

module.exports = {saveModelData,getModelsfromDb,getModelName}