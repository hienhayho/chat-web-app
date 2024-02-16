import User from "../models/user.model.js";

const getUserForSideBarService = async (logginUserId) => {
    try {
        const fillteredUser = await User.find({ _id: { $ne: logginUserId } }).select(
            "-password"
        );
        return {
            status: "success",
            errorCode: 0,
            users: fillteredUser
        };
    } catch (error) {
        console.log("Error in user.services.getUserForSideBar: ", error);
        return {
            status: "error",
            errorCode: -1,
            error: "Internal Server Error"
        };
    }
};

export {
    getUserForSideBarService
}