import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js'

export const register = async (req, res) => {
    try{
        const {
            firstname,
            lastname,
            email,
            password,
            location,
            occupation
        } = req.body;

        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstname,
            lastname,
            email,
            password: passwordHash,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impression: Math.floor(Math.random() * 10000),
        })

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(error){
        res.status(500).json({ error: error.message })
    }
};

export const login = async (req, res) =>{
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(404).json({ error: "User not found" })
            }
            const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword){
            return res.status(401).json({ error: "Invalid password" })
            }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
        delete user.password;
        res.status(200).json({ token, user });  
    }catch(error) {
        res.status(500).json({ error: error.message})
    }
}
