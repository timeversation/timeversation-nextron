import { create } from "zustand";
import { getProfile } from "../../timeversation.config";

export const useServer = create((set, get) => {

    return {
        party: `official`,
        rest: ``,
        socket: ``,
        saveBackend: () => {
            let rest = get().rest
            let scoket = get().socket
            let party = get().party

            localStorage.setItem('timeverstaion:party', party)
            localStorage.setItem('timeverstaion:rest', rest)
            localStorage.setItem('timeverstaion:socket', scoket)
        },
        loadBackend: () => {
            let rest = localStorage.getItem('timeverstaion:rest')
            let socket = localStorage.getItem('timeverstaion:socket')
            let party = localStorage.getItem('timeverstaion:party')

            set({
                party: party,
                rest: rest,
                socket: socket,
            })
        },
        setBackend: ({ type = 'official', socket, rest }) => {
            if (type === 'official') {
                let profile = getProfile()
                set({
                    party: type,
                    socket: profile.socket,
                    rest: profile.rest,
                })
            } else if (type === 'selfhost') {
                set({
                    party: type,
                    socket: socket,
                    rest: rest,
                })
            }
            saveBackend()
        }
    }
})