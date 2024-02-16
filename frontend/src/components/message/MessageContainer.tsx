import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";


const MessageContainer = () => {
    const noChatSelected = true;
    return (
        <div className="flex flex-col md:min-w-[450px]">
            {noChatSelected ? <NoChatSelected /> : (
                <>
                    {/* Header */}
                    <div className="bg-slate-500 px-4 my-2 mb-2">
                        <span className="label-text">To:&nbsp;</span>
                        <span className="text-gray-900 font-bold">Hien Hay Ho</span>
                    </div>
                    {/* Messages */}
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div >
    )
}

const NoChatSelected = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 Hien Hay Ho</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}

export default MessageContainer;