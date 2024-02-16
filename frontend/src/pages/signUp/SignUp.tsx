import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 backdrop-blur-md bg-opacity-0 backdrop-filter bg-clip-padding">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up&nbsp;
                    <span className="text-blue-500">Chat App</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Hien Hay Ho ... "
                            className="w-full input input-bordered h-10 hover:opacity-85 transition-all"
                            name="userName"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="hienhayho ... "
                            className="w-full input input-bordered h-10 hover:opacity-85 transition-all"
                            name="userName"
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
                            name="password"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password ... "
                            className="w-full input input-bordered h-10 hover:opacity-85 transition-all"
                            name="confirmPassword"
                        />
                    </div>
                    <GenderCheckBox />
                    <a href="#" className="text-sm hover:text-blue-500 mt-4 inline-block">
                        Already have an account?
                    </a>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;