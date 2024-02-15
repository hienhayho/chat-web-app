import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';

const salt = bcryptjs.genSaltSync(10);

const signUp = async (userInfo) => {
    try {
        const user = await User.findOne({ userName: userInfo.userName });
        if (user) {
            return {
                status: "error",
                errorCode: -1,
                message: "Username already exists"
            }
        }
    } catch (error) {
        return {
            status: "error",
            errorCode: -1,
            message: error.message
        }
    }
    const hashedPassword = bcryptjs.hashSync(userInfo.password, salt);
    try {
        const user = await User.create({
            fullName: userInfo.fullName,
            userName: userInfo.userName,
            password: hashedPassword,
            gender: userInfo.gender,
            profilePic: userInfo.profilePic,
        });
        if (user) {
            return {
                status: "success",
                errorCode: 0,
                message: "User created successfully",
                data: user,
            };
        }
    } catch (error) {
        return {
            status: "error",
            errorCode: -1,
            message: error.message
        }
    }
};

export {
    signUp
};