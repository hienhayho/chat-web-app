import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "@/context/AuthContext";

interface SignupProps {
    fullName: string;
    userName: string;
    password: string;
    confirmPassword: string;
    gender: string;
};

interface backendRespose {
    status: string;
    errorCode: number;
    message: string;
    data?: { [key: string]: string };
}

export interface useSignupProps {
    loading: boolean;
    signup: (inputs: SignupProps) => Promise<void>;
};

const useSignup = (): useSignupProps => {
    const [loading, setLoading] = useState<boolean>(false);
    // @ts-ignore
    const [authUser, setAuthUser] = useAuthContext();

    const signup = async (inputs: SignupProps): Promise<void> => {
        const success = handleInputError(inputs);
        if (!success) return;
        setLoading(true);
        try {
            const result = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(inputs),
            });
            const data: backendRespose = await result.json();
            if (data.errorCode === -1) {
                throw new Error(data.message);
            }
            if (data.data) {
                localStorage.setItem("chat-user", JSON.stringify(data.data));
                setAuthUser(data.data);
            }

        } catch (error) {
            toast.error((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
}

const handleInputError = (inputs: SignupProps) => {
    if (!inputs.fullName || !inputs.userName || !inputs.password || !inputs.confirmPassword || !inputs.gender) {
        toast.error("Please fill in all fields");
        return false;
    }
    if (inputs.password !== inputs.confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }
    if (inputs.password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }
    return true;
}

export default useSignup;