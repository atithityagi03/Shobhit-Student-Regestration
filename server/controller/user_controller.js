import { response } from 'express';
import User from '../schema/user_schema.js'



export const addUser = async (req, res ) => {
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
        console.log('Data Successfully Saved!'); 
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}