import {User} from "../models.userModel";

export const Register = async(req,res)=>{
    try {
        const {fullName ,email ,password} = req.body;
        if (!fullName || !email || !password) {
            return res.status(401).json({
                message:"Invalid Data",
                success:false
            })
        }
        const user = await User.findOne({email});
        if (user) {
            return res.status(401).json({
                message:"This Emial Is Already Used",
                success:false,
            })
        }
        await User.create({
            fullName,
            email,
            password
        });

        return res.status(201).json({
            message:"Account Created Successfully."
        })
    } catch (error) {
        console.log(error);
    }
}