import { create } from "zustand";
import { getProfile } from "../../timeversation.config";

export const useServer = create((set, get) => {

    return {
        serverOwner: 'official',
        rest: '',
        socket: '',
        access_token: ``,
        saveBackendToLocalStorage: () => {
            let rest = get().rest
            let scoket = get().socket
            let serverOwner = get().serverOwner
            let access_token = get().access_token

            localStorage.setItem('timeverstaion:access_token', access_token)
            localStorage.setItem('timeverstaion:serverOwner', serverOwner)
            localStorage.setItem('timeverstaion:rest', rest)
            localStorage.setItem('timeverstaion:socket', scoket)
        },
        loadBackendToLocalStorage: () => {
            let rest = localStorage.getItem('timeverstaion:rest')
            let socket = localStorage.getItem('timeverstaion:socket')
            let serverOwner = localStorage.getItem('timeverstaion:serverOwner')
            let access_token = localStorage.getItem('timeverstaion:access_token')

            set({
                access_token: access_token,
                serverOwner: serverOwner,
                rest: rest,
                socket: socket,
            })
        },
        login: () => {
            get().loadBackendToLocalStorage()
            let rest = get().rest
            fetch(`${rest}/login`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    //
                })
            })
                .then(res => res.json())
                .then(data => {
                    //
                    console.log(data)
                })
        },
        setBackend: ({ serverOwner = 'official', socket, rest }) => {
            set({
                serverOwner: serverOwner,
                socket: socket,
                rest: rest,
            })
            get().saveBackendToLocalStorage()
        }
    }
})