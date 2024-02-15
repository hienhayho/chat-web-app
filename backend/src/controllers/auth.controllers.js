import { signUp } from '../services/auth.services.js';

const loginUser = async (req, res) => {
    res.send('Login Up');
};

const logoutUser = async (req, res) => {
    res.send('Logout');
}

const signupUser = async (req, res) => {
    let defaultProfilePic = "";
    const { fullName, userName, password, confirmPassword, gender } = req.body;
    if (gender === "male") {
        defaultProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    }
    else if (gender === "female") {
        defaultProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    }
    else {
        defaultProfilePic = `https://avatar.iran.liara.run/username?username=${userName}+${fullName}`;
    }

    if (password !== confirmPassword) {
        return res.status(400).json({
            status: "error",
            errorCode: -1,
            message: "Password and Confirm Password do not match"
        });
    }
    const user = {
        fullName,
        userName,
        password,
        gender,
        profilePic: defaultProfilePic
    }
    const result = await signUp(user);
    if (result.errorCode === -1) {
        return res.status(400).json(result);
    }
    res.status(201).json(result);
}

export default {
    loginUser,
    logoutUser,
    signupUser
};