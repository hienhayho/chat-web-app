import bcryptjs from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generate.token.js';
dotenv.config();

const salt = bcryptjs.genSaltSync(+process.env.SALT);

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
                data: {
                    _id: user._id,
                    fullName: user.fullName,
                    userName: user.userName,
                    gender: user.gender,
                    profilePic: user.profilePic,
                },
            };
        }
    } catch (error) {
        console.log("Error in signUp services: ", error.message)
        return {
            status: "error",
            errorCode: -1,
            message: error.message
        }
    }
};

const login = async (userInfo, res) => {
    const { userName, password } = userInfo;
    try {
        const user = await User.findOne({ userName: userName });
        const isCorrectPassword = bcryptjs.compareSync(password, user?.password || "");
        if (!user || !isCorrectPassword) {
            return {
                status: "error",
                errorCode: -1,
                message: "Invalid username or password"
            }
        }
        generateTokenAndSetCookie(user._id, res);
        return {
            status: "success",
            errorCode: 0,
            message: "User logged in successfully",
            data: {
                _id: user._id,
                fullName: user.fullName,
                userName: user.userName,
                profilePic: user.profilePic,
            }
        }
    } catch (error) {
        console.log("Error in login services: ", error.message);
        return {
            status: "error",
            errorCode: -1,
            message: error.message
        }
    }
};

const logout = (res) => {
    try {
        res.cookie("token", "", {
            maxAge: 0,
        });
        return {
            status: "success",
            errorCode: 0,
            message: "User logged out successfully"
        }
    } catch (error) {
        console.log("Error in logout services: ", error.message);
        return {
            status: "error",
            errorCode: -1,
            message: error.message
        }
    }
}

export {
    signUp,
    login,
    logout
};