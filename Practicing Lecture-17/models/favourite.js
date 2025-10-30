const mongoose=require('mongoose')
const favioruiteSchema=mongoose.Schema({
  houseId:{
    type:mongoose.Schema.Types.ObjectId,//dosre table ka dosre collection ka _id hai
    ref:'Home',
    required:true,
    unique:true
  }
})
module.exports=mongoose.model('Favourite',favioruiteSchema)//Favourite name ka ayk module bana de jiye or