import MessageContainer from "../../components/message/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";


const Home = () => {
    return (
        <div className="flex gap-2 sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0">
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Home;
