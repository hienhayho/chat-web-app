import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex flex-col min-w-96 items-center justify-center mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 backdrop-blur-md bg-opacity-0 backdrop-filter bg-clip-padding">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login&nbsp;
                    <span className="text-blue-500">Chat App</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Username ... "
                            className="w-full input input-bordered h-10 hover:opacity-85 transition-all"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password ... "
                            className="w-full input input-bordered h-10 hover:opacity-85 transition-all"
                        />
                    </div>
                    <div className="mt-3">
                        <p className="text-sm inline-block">Don't have an account?</p>
                        <Link to={"/signup"} className="text-md text-red-400 ml-3 hover:text-blue-500">Register</Link>
                    </div>
                    <div>
                        <button className="btn btn-block btn-sm mt-2">Login</button>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Login;