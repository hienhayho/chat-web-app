import { getUserForSideBarService } from "../services/user.services.js";

const getUserForSideBar = async (req, res) => {
    const logginUserId = req.user._id;
    const result = await getUserForSideBarService(logginUserId);
    if (result.status === "success") {
        return res.status(200).json(result);
    }
    return res.status(500).json(result);
};

export default {
    getUserForSideBar
}