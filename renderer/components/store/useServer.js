import { create } from "zustand";

export const useServer = create((set, get) => {

    return {
        serverOwner: 'official',
        rest: '',
        socket: '',
        accessToken: ``,
        saveBackendToLocalStorage: () => {
            let rest = get().rest
            let scoket = get().socket
            let serverOwner = get().serverOwner
            let accessToken = get().accessToken

            localStorage.setItem('timeversation::accessToken', accessToken)
            localStorage.setItem('timeversation::serverOwner', serverOwner)
            localStorage.setItem('timeversation::rest', rest)
            localStorage.setItem('timeversation::socket', scoket)
        },
        loadBackendToLocalStorage: () => {
            let rest = localStorage.getItem('timeversation::rest')
            let socket = localStorage.getItem('timeversation::socket')
            let serverOwner = localStorage.getItem('timeversation::serverOwner')
            let accessToken = localStorage.getItem('timeversation::accessToken')

            set({
                accessToken: accessToken,
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


    }
})