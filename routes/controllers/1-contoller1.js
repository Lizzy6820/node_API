import UserSchema  from '../../models/user.js';

process.setMaxListeners(Infinity);


export const getUsers = async (req,res) =>{
   try{
    const allUsers = await UserSchema.find()
    res.json(allUsers)
   }
   catch (err){
    res.json({message:err})
}
    
  }


export const createUser =async (req,res)=>{
    const userCreate = new UserSchema({
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    })

   try{
       const createdUser = await userCreate.save();
       res.json(createdUser)
   }
   catch (err){
       res.json({message:err})
   }
}


export const getUser = async(req,res)=>{
  try{
    const foundUser = await UserSchema.findById(req.params.userID)
    res.json(foundUser)
}
catch(err){
    res.json({message:err})
}
}


export const deleteUser = async (req,res)=>{
    try{
        const deletedUser = await UserSchema.deleteOne({_id: req.params.userID})
        res.json(deletedUser)
    }
    catch(err){
        res.json({message:err})
    }
}
   


export const patchUser = async (req,res)=>{
    try{
        const updatedUser = await UserSchema.updateOne(
            {_id: req.params.userID},
            {$set:{lastName: req.body.lastName}}
        )
        res.json(updatedUser)
    }
    catch(err){
        res.json({message:err})
    }
}