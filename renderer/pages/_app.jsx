import '../components/global.css'
import { create } from "zustand"
import { Confirmation } from "../components/UI/Confirmation/Confirmation"

// export const
export const usePopup = create((set, get) => {
    //

    return {
        stack: [],
        onConfirm: ({ onConfirm = () => { }, onCancel = () => { } }) => {
            set(state => {
                state.stack.push({
                    display: <Confirmation onConfirm={onConfirm} onCancel={onCancel} key={'_' + Math.random()}></Confirmation>
                })

                return {
                    ...state,
                    stack: [...state.stack]
                }
            })
        }
    }
})

export default function App({ Component, pageProps }) {

    return <>
        <Component {...pageProps} />
    </>
}