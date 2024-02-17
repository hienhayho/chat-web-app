import { Link } from "react-router-dom";
import { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import useSignup from "@/hooks/useSignup";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { signup } = useSignup();

    const handleCheckbox = (gender: string) => {
        setInputs({ ...inputs, gender })
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 backdrop-blur-md bg-opacity-0 backdrop-filter bg-clip-padding">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up&nbsp;
                    <span className="text-blue-500">Chat App</span>
                </h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Hien Hay Ho ... "
                            className="w-full input input-bordered h-10 hover:opacity-85 transition-all"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
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
                            value={inputs.userName}
                            onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
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
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
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
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>
                    <GenderCheckBox onCheckBoxChange={handleCheckbox} selectedGender={inputs.gender} />
                    <p className="inline-block text-sm">Already have an account ?</p>
                    <Link to="/login" className="text-md ml-3 text-red-400 hover:text-blue-500 mt-4 inline-block">
                        Login
                    </Link>
                    <div>
                        <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;