import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
    return (
        <div className="mt-auto">
            <button className="btn btn-ghost btn-circle text-center" title="Logout">
                <BiLogOut className="w-6 h-6" />
            </button>
        </div>
    )
};

export default LogoutButton;