import User from "../models/user.js";
import bcrypt from "bcrypt"

export const registerUser = async (req, res) => {
    try {
        const { fullname, email, password, gender} = req.body;
        const user = await findOne({email: email});
    
        if (user) 
        res.status(404).json({
            message: "User with email already exist"
        })
    
        const saltPassword = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, saltPassword);
    
        const newUser = new User({
            fullname,
            email,
            password: hashPassword,
            gender
        });
    
        await User.save();
    
        res.status(201).json({
            message: `${fullname} has successfully registered`,
            data: newUser
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}