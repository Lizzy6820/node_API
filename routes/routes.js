import express from "express";
import {getUsers, createUser,getUser, deleteUser,patchUser } from "./controllers/1-contoller1.js";

const router = express.Router()


router.get('/', getUsers)

router.post('/',createUser) 

router.get('/:userID',getUser)

router.delete('/:userID', deleteUser)

router.patch('/:userID', patchUser)





export default router