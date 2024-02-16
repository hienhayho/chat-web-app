import { postSendMessage, getMessagesAccordingId } from "../services/message.services.js";

const sendMessage = async (req, res) => {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const result = await postSendMessage(senderId, receiverId, message);
    if (result.status === "success") {
        return res.status(201).json(result);
    } else {
        return res.status(500).json(result);
    }
};

const getMessages = async (req, res) => {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const result = await getMessagesAccordingId(senderId, receiverId);
    if (result.status === "success") {
        return res.status(200).json(result);
    } else {
        return res.status(500).json(result);
    }
};

export default {
    sendMessage,
    getMessages
};