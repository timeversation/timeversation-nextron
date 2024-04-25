import { Login } from "components/LoginForm/LoginForm"
import { useState } from "react"
import { Register } from "./RegisterForm"

export function AuthForm() {
    //
    let activeAuth = "w-24 text-center text-green-600 pb-1 border-b border-green-500"
    let inactiveAuth = "w-24 text-center text-gray-500 pb-1 border-b border-gray-500"

    let [chosenAuth, setChosenAuth] = useState('register')
    let [params, setParams] = useState({ username: '', password: '' })

    return <>
        <div className="relative w-full bg-blueGray-200 border-0">
            <div className="flex justify-center">
                <button onClick={() => {
                    setChosenAuth('register')
                }} className={chosenAuth === 'register' ? activeAuth : inactiveAuth}>
                    Register
                </button>
                <span className=" text-xs mx-5">

                </span>
                <button onClick={() => {
                    setChosenAuth('login')
                }} className={chosenAuth === 'login' ? activeAuth : inactiveAuth}>
                    Login
                </button>
            </div>

            <div className="flex-auto py-5">
                {chosenAuth === 'login' && <Login params={params} ></Login>}
                {chosenAuth === 'register' && <Register setAuth={(v, params) => {
                    setChosenAuth(v)
                    setParams(params)
                }}></Register>}
            </div>
        </div>
    </>
}
