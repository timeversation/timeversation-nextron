import React from "react"

export function TestIPC() {
    const [message, setMessage] = React.useState('No message found')

    React.useEffect(() => {
        return window.ipc.on('message', (data) => {
            setMessage(data)
        })
    }, [])

    return <>
        <button
            onClick={() => {
                window.ipc.send('hi', 'Hello')
            }}
        >
            Test IPC
        </button>
        <p>{message}</p>
    </>

}