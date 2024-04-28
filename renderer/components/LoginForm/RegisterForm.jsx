import clsx from "clsx"
import { useServer } from "components/store/useServer"
import { useEffect, useRef, useState } from "react"
import debounce from 'debounce'

export function Register({ setAuth = () => { } }) {
    let refCanUse = useRef()
    let cta = "bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white"

    let refUsername = useRef()
    let refPassword = useRef()
    let refConfirmPassword = useRef()

    let [alertUI, setAlert] = useState('')

    useEffect(() => {
        let tt = -1
        if (alertUI) {
            tt = setTimeout(() => {
                setAlert('')
            }, 5000)

            return () => {
                setAlert('')
                clearTimeout(tt)
            }
        }
    }, [alertUI])

    const getClass = (isOpen) => clsx({
        'transition-all duration-1000 ': true,
        'translate-x-[0%]': isOpen,
        'translate-x-[150%] ': !isOpen
    });

    return <>


        <form onSubmit={(ev) => {
            setAlert('')

            ev.preventDefault()

            let username = refUsername.current.value
            let password = refPassword.current.value
            let confirmPassword = refConfirmPassword.current.value

            if (!username || username === '') {
                setAlert('miss-username')
                return
            }

            if (!password) {
                setAlert('miss-password')
                return
            }

            if (password?.length <= 5) {
                setAlert('short-password')
                return
            }

            if (password !== confirmPassword) {
                setAlert('not-same-password')
                return
            }

            async function run() {
                let canUse = await useServer.getState().checkUsernameFreeToUse({ username })

                if (!canUse) {
                    setAlert('username-taken')
                    return
                }

                try {
                    useServer.getState().registerUser({ username, password })
                        .then(({ ok, data }) => {
                            if (ok) {
                                setAlert('successful')

                                setAuth('login', { username, password })
                            } else {
                                setAlert(data.error)
                            }
                        }).catch(({ ok, data }) => {
                            if (ok) {
                                setAlert('successful')

                                setAuth('login', { username, password })
                            } else {
                                setAlert(data.error)
                            }
                        })
                } catch (e) {
                    console.log(e)
                }
            }
            run()
        }}>
            <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-username"
                >
                    Username <span className="ml-2 normal-case font-normal" ref={refCanUse}></span>
                </label>
                <input
                    ref={refUsername}
                    type="text"
                    onInput={debounce((ev) => {
                        //  
                        let username = `${ev.target.value}`
                        if (!username) {
                            refCanUse.current.innerText = ''
                            return
                        }

                        refCanUse.current.innerText = 'Checking...'
                        refCanUse.current.className = 'ml-2 normal-case font-normal text-blue-500'
                        // setAlert('')
                        useServer.getState().checkUsernameFreeToUse({ username })
                            .then((canUse) => {
                                if (!canUse) {
                                    refCanUse.current.innerText = `"${username}" is taken!`
                                    refCanUse.current.className = 'ml-2 normal-case font-normal text-red-500'
                                    // setAlert('username-taken')
                                } else {
                                    refCanUse.current.innerText = `"${username}" is available!`
                                    refCanUse.current.className = 'ml-2 normal-case font-normal text-green-500'
                                    // setAlert('can-use-username')
                                }
                            })
                    }, 500)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Username"
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
                    ref={refPassword}
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                />
            </div>
            <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    Confirm Password
                </label>
                <input
                    ref={refConfirmPassword}
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                />
            </div>
            <div>


            </div>
            <div className="text-center mt-6">
                <button
                    className={cta}
                    type="submit"
                >
                    Register
                </button>
            </div>
        </form>

        {<div className={getClass(alertUI == 'can-use-username') + " fixed top-12 right-12 flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"}>
            <div className="flex items-center justify-center w-12 bg-emerald-500">
                <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                </svg>
            </div>
            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                        Username Available
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-200">
                        {refUsername?.current?.value || ''} is available!
                    </p>
                </div>
            </div>
        </div>}


        {<div className={getClass(alertUI == 'successful') + " fixed top-12 right-12 flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"}>
            <div className="flex items-center justify-center w-12 bg-emerald-500">
                <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                </svg>
            </div>
            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                        Success
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-200">
                        Your account was registered!
                    </p>
                </div>
            </div>
        </div>}

        {<div className={getClass(alertUI == 'username-taken') + "  fixed top-12 right-12  flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"}>
            <div className="flex items-center justify-center w-12 bg-red-500">
                <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                </svg>
            </div>
            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span className="font-semibold text-red-500 dark:text-red-400">
                        Error
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-200">
                        Username "{refUsername?.current?.value || ''}" is taken!
                    </p>
                </div>
            </div>
        </div>}

        {<div className={getClass(alertUI == 'miss-password') + "  fixed top-12 right-12  flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"}>
            <div className="flex items-center justify-center w-12 bg-red-500">
                <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                </svg>
            </div>
            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span className="font-semibold text-red-500 dark:text-red-400">
                        Error
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-200">
                        You need password!
                    </p>
                </div>
            </div>
        </div>}

        {<div className={getClass(alertUI == 'short-password') + "  fixed top-12 right-12  flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"}>
            <div className="flex items-center justify-center w-12 bg-red-500">
                <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                </svg>
            </div>
            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span className="font-semibold text-red-500 dark:text-red-400">
                        Error
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-200">
                        Your password is too short!
                    </p>
                </div>
            </div>
        </div>}


        {<div className={getClass(alertUI == 'not-same-password') + "  fixed top-12 right-12  flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"}>
            <div className="flex items-center justify-center w-12 bg-red-500">
                <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                </svg>
            </div>
            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span className="font-semibold text-red-500 dark:text-red-400">
                        Error
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-200">
                        You need to enter the same password!
                    </p>
                </div>
            </div>
        </div>}


        {<div className={getClass(alertUI == 'miss-username') + "  fixed top-12 right-12  flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"}>
            <div className="flex items-center justify-center w-12 bg-red-500">
                <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                </svg>
            </div>
            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span className="font-semibold text-red-500 dark:text-red-400">
                        Error
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-200">
                        You need to enter the same password!
                    </p>
                </div>
            </div>
        </div>}
    </>
}