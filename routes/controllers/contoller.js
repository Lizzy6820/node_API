import { v4 as uuidv4 } from 'uuid';
import { UserSchema } from '../../models/user.js';

let users= []

export const getUsers = (req,res) =>{

    res.send(users);
  }


export const createUser = (req,res)=>{
    const user = req.body

    users.push({...user, id:uuidv4()})

    res.send(`User with name ${user.firstName} successfully added!`)
}


export const getUser = (req,res)=>{
    const {id} = req.params

    const foundUser = users.find((user)=> user.id === id)

    res.send(foundUser)
}


export const deleteUser = (req,res)=>{
    const {id} = req.params

     users = users.filter((user)=> user.id !== id)

    res.send(`user with ${id} has been deleted `)
}


export const patchUser = (req,res)=>{
    const {id} = req.params

    const {firstName, lastName, age} = req.body

    const user = users.find((user)=> user.id === id)
    
    if (firstName) user.firstName = firstName
    if (lastName) user.lastName = lastName
    if (age) user.age = age
    
    res.send(`user with id ${id} has been updated`)
}