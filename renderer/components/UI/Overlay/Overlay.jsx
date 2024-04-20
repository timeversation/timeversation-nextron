
import { create } from "zustand"
import { Confirmation } from "../Confirmation/Confirmation"
import { Backdrop } from '../Backdrop/Backdrop'
import { Loading } from '../Loading/Loading'
import { GUI } from '../GUI/GUI'

export const Popup = {
    confirm: (args) => {
        useOverlay.getState().confirm(args)
    },
    loading: (args) => {
        useOverlay.getState().loading(args)
    },
    gui: (args) => {
        useOverlay.getState().gui(args)
    }
}

export const Overlay = () => {
    let bubble = useOverlay(r => r.bubble)
    let backdrop = useOverlay(r => r.backdrop)

    return <>
        {backdrop.map(r => {
            return r.display
        })}

        {bubble.map(r => {
            return r.display
        })}
    </>
}

// export const
export const useOverlay = create((set, get) => {
    return {
        backdrop: [],
        bubble: [],
        confirm: ({ onConfirm = () => { }, onCancel = () => { } }) => {
            set(state => {
                let id = '_' + Math.random().toString(36).slice(2, 9)
                let backdropID = id + "_backdrop"
                let bubbleID = id + "_bubble"
                let removeDOM = () => {
                    set(state => {
                        state.bubble = state.bubble.filter(r => r.id !== bubbleID)
                        state.backdrop = state.backdrop.filter(r => r.id !== backdropID)
                        return {
                            ...state,
                            bubble: [...state.bubble],
                            backdrop: [...state.backdrop]
                        }
                    })
                }

                let backdrop = {
                    id: backdropID,
                    display: <Backdrop onCancel={() => {
                        onCancel()
                        removeDOM()
                    }} key={backdropID}></Backdrop>
                }
                let bubble = {
                    id: bubbleID,
                    display: <Confirmation onConfirm={() => {
                        onConfirm()
                        removeDOM()
                    }} onCancel={() => {
                        onCancel()
                        removeDOM()
                    }} key={bubbleID}></Confirmation>
                }

                state.bubble.push(bubble)
                state.backdrop.push(backdrop)

                return {
                    ...state,
                    bubble: [...state.bubble],
                    backdrop: [...state.backdrop]
                }
            })
        },
        gui: ({ Content, ...params }) => {
            params.onCancel = params.onCancel || (() => { })
            set(state => {
                let id = '_' + Math.random().toString(36).slice(2, 9)
                let backdropID = id + "_backdrop"
                let bubbleID = id + "_bubble"
                let removeDOM = () => {
                    set(state => {
                        state.bubble = state.bubble.filter(r => r.id !== bubbleID)
                        state.backdrop = state.backdrop.filter(r => r.id !== backdropID)
                        return {
                            ...state,
                            bubble: [...state.bubble],
                            backdrop: [...state.backdrop]
                        }
                    })
                }

                let backdrop = {
                    id: backdropID,
                    display: <Backdrop onCancel={() => {
                        params.onCancel()
                        removeDOM()
                    }} key={backdropID}></Backdrop>
                }

                let bubble = {
                    id: bubbleID,
                    display: <GUI
                        {...params} close={removeDOM} Content={Content} key={bubbleID}></GUI>
                }

                state.bubble.push(bubble)
                state.backdrop.push(backdrop)

                return {
                    ...state,
                    bubble: [...state.bubble],
                    backdrop: [...state.backdrop]
                }
            })
        },
        loading: ({ text, onAPI = () => { } }) => {
            set(state => {
                let id = '_' + Math.random().toString(36).slice(2, 9)
                let backdropID = id + "_backdrop"
                let bubbleID = id + "_bubble"
                let removeDOM = () => {
                    set(state => {
                        state.bubble = state.bubble.filter(r => r.id !== bubbleID)
                        state.backdrop = state.backdrop.filter(r => r.id !== backdropID)
                        return {
                            ...state,
                            bubble: [...state.bubble],
                            backdrop: [...state.backdrop]
                        }
                    })
                }

                onAPI({ close: removeDOM })

                let backdrop = {
                    id: backdropID,
                    display: <Backdrop onCancel={() => {
                    }} key={backdropID}></Backdrop>
                }
                let bubble = {
                    id: bubbleID,
                    display: <Loading text={text} key={bubbleID}></Loading>
                }

                state.bubble.push(bubble)
                state.backdrop.push(backdrop)

                return {
                    ...state,
                    bubble: [...state.bubble],
                    backdrop: [...state.backdrop]
                }
            })
        }
    }
})

