import { create } from "zustand";

export const useServer = create((set, get) => {

    return {
        serverOwner: 'official',
        rest: '',
        socket: '',
        jwt: ``,
        saveBackendToLocalStorage: async () => {
            let rest = get().rest
            let scoket = get().socket
            let serverOwner = get().serverOwner
            let jwt = get().jwt

            localStorage.setItem('timeversation::jwt', jwt)
            localStorage.setItem('timeversation::serverOwner', serverOwner)
            localStorage.setItem('timeversation::rest', rest)
            localStorage.setItem('timeversation::socket', scoket)
        },
        loadBackendFromLocalStorage: async () => {
            let rest = localStorage.getItem('timeversation::rest')
            let socket = localStorage.getItem('timeversation::socket')
            let serverOwner = localStorage.getItem('timeversation::serverOwner')
            let jwt = localStorage.getItem('timeversation::jwt')

            set({
                jwt: jwt,
                serverOwner: serverOwner,
                rest: rest,
                socket: socket,
            })
        },
        setBackend: ({ serverOwner = 'official', socket, rest }) => {
            set({
                serverOwner: serverOwner,
                socket: socket,
                rest: rest,
            })
            get().saveBackendToLocalStorage()
        },

        login: ({ username, password }) => {
            let rest = get().rest
            fetch(`${rest}/auth`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    action: 'login',
                    username,
                    password
                })
            })
                .then(res => res.json())
                .then(data => {
                    //
                    console.log(data)
                })
        },


        checkUsernameFreeToUse: async ({ username }) => {
            let rest = get().rest
            return fetch(`${rest}/auth`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    action: 'checkUsernameFreeToUse',
                    username,
                })
            })
                .then(res => res.ok && res.json())
                .then(() => {
                    return true
                }).catch(r => {
                    console.error(r)
                    return false
                })
        },

        registerUser: async ({ username, password }) => {
            let rest = get().rest
            return fetch(`${rest}/auth`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    action: 'registerUser',
                    username,
                    password
                })
            })
                .then(async (res) => {
                    return {
                        ok: res.ok,
                        data: await res.json()
                    }
                })
        },
        loginUserPassword: async ({ username, password }) => {
            let rest = get().rest
            return fetch(`${rest}/auth`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    action: 'loginUserPassword',
                    username,
                    password
                })
            })
                .then(async (res) => {
                    let data = await res.json()
                    if (res.ok) {
                        set({
                            jwt: data.jwt
                        })
                        get().saveBackendToLocalStorage()
                    }

                    return {
                        ok: res.ok,
                        data: data
                    }
                })
        },
        verifyJWT: async ({ jwt }) => {
            let rest = get().rest
            return fetch(`${rest}/auth`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    action: 'verifyJWT',
                    jwt
                })
            })
                .then(async (res) => {
                    return {
                        ok: res.ok,
                        data: await res.json()
                    }
                })
        },
        logout: async ({ }) => {
            set({
                jwt: ''
            })
            await get().saveBackendToLocalStorage()

        }
    }
})