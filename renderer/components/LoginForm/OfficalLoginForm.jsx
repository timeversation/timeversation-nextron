import { useState } from "react"

export function OfficalLoginForm() {
    return <AuthForm></AuthForm>
}

export function AuthForm() {
    let activeAuth = "text-[#475F45] underline"
    let inactiveAuth = "text-gray-500 underline"
    let [chosenAuth, setChosenAuth] = useState('register')

    return <>
        <div className="relative flex flex-col break-words w-full rounded-lg bg-blueGray-200 border-0 ">
            <div className="text-center">
                <button onClick={() => {
                    setChosenAuth('login')
                }} className={chosenAuth === 'login' ? activeAuth : inactiveAuth}>Login</button> | <button onClick={() => {
                    setChosenAuth('register')
                }} className={chosenAuth === 'register' ? activeAuth : inactiveAuth}>Register</button>
            </div>
            <div className="flex-auto py-5">
                {chosenAuth === 'login' && <Login></Login>}
                {chosenAuth === 'register' && <Register></Register>}
            </div>
        </div>
    </>
}

function Login() {
    let cta = "bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white"

    return <>
        <form>
            <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Email
                </label>
                <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                />
            </div>
            <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Password
                </label>
                <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                />
            </div>
            <div className="text-center mt-6">
                {<button
                    className={cta}
                    type="button"
                >
                    {" "}
                    Sign In{" "}
                </button>}
            </div>
        </form></>
}

function Register() {
    let cta = "bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white"

    return <>
        <form>
            <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Email
                </label>
                <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                />
            </div>
            <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Password
                </label>
                <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                />
            </div>
            <div className="text-center mt-6">
                {<button
                    className={cta}
                    type="button"
                >
                    {" "}
                    Register{" "}
                </button>}
            </div>
        </form></>
}