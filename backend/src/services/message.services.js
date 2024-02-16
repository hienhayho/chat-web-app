import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

const postSendMessage = async (senderId, receiverId, message) => {
    try {
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            message: message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage);
        }

        await Promise.all([newMessage.save(), conversation.save()]);
        return {
            status: "success",
            errorCode: 0,
            senderId: newMessage.senderId,
            receiverId: newMessage.receiverId,
            message: newMessage.message,
        }
    } catch (error) {
        console.log("Error in postSendMessage services: ", error.message);
        return {
            status: "error",
            errorCode: -1,
            error: "Internal Server Error",
        }
    }

};

const getMessagesAccordingId = async (senderId, receiverId) => {
    try {
        const conversation = await Conversation
            .findOne({
                participants: { $all: [senderId, receiverId] },
            })
            .populate("messages")
            .populate("participants");

        if (!conversation) {
            return {
                status: "success",
                errorCode: 0,
                messages: [],
            }
        }

        return {
            status: "success",
            errorCode: 0,
            user: conversation.participants,
            messages: conversation.messages,
        }
    } catch (error) {
        console.log("Error in getMessages services: ", error.message);
        return {
            status: "error",
            errorCode: -1,
            error: "Internal Server Error",
        }
    }
};

export {
    postSendMessage,
    getMessagesAccordingId
}