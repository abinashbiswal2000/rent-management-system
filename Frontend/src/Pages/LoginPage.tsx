import { useNavigate } from "react-router"
import { useState } from "react";
import { type Dispatch, type SetStateAction } from "react";

type LoginPageProps = {
    setLoggedIn: Dispatch<SetStateAction<string | null>>
}

export default function LoginPage(LoginPageProps: LoginPageProps) {

    const navigate = useNavigate();

    const [obj, setObj] = useState({
        userId: "",
        password: "",
        otp: ""
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setObj(
            (prev) => {
                return { ...prev, [e.target.name]: e.target.value }
            }
        )
    }

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const response = await fetch(
            `http://localhost:3000/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)
            }
        )
        if (response.ok === false) {
            alert("Incorrect User id or password or otp");
        } else {
            const data = await response.json();
            localStorage.setItem("token", data.token);
            LoginPageProps.setLoggedIn(localStorage.getItem("token"))
            navigate('/');
        }
    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <form
            className="p-2 mx-auto max-w-lg flex flex-col gap-2"
            onSubmit={handleSubmit}
        >
            <h1 className="text-2xl text-center my-4">Rent Management System</h1>
            <input name="userId" onChange={handleChange} type="text" placeholder="User ID" className="rounded-lg p-2 focus:outline-blue-200 border border-gray-300" />
            <input name="password" onChange={handleChange} type={showPassword ? "text" : "password"} placeholder="Password" className="rounded-lg p-2 focus:outline-blue-200 border border-gray-300" />
            <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={showPassword}
                    onChange={() => { setShowPassword(!showPassword) }}
                />
                Show Password
            </label>
            <input maxLength={6} name="otp" onChange={handleChange} type="text" placeholder="OTP" className="tracking-[0.75em] rounded-lg p-2 focus:outline-blue-200 border border-gray-300" />
            <button type="submit" className="p-2 bg-amber-500 rounded-lg cursor-pointer">
                Login
            </button>
        </form>
    )
}