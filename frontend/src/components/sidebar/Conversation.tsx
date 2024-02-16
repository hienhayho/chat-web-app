

const Conversation = () => {
    return (
        <>
            <div className="flex items-center hover:bg-sky-500 gap-2 rounded p-2 py-1 cursor-pointer">
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200">Hien Hay Ho</p>
                        <span className="text-xl">😡</span>
                    </div>
                </div>
            </div>
            <div className="divider my-0 py-0 h-1"></div>
        </>
    )
}

export default Conversation;