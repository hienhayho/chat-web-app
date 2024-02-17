import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import SignUp from "./pages/signUp/SignUp"
import { useAuthContext } from "./context/AuthContext"

function App() {
  // @ts-ignore
  const [authUser, setAuthUser] = useAuthContext();
  console.log("authUser: ", authUser);
  return (
    <>
      <div className="p-4 h-screen items-center justify-center flex">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
