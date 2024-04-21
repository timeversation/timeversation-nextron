import React from "react"

export function TestIPCWeb() {
    const [message, setMessage] = React.useState('No message found')

    React.useEffect(() => {
        return window.ipc.on('launcher-url', (event) => {
            setMessage(event)
        })
    }, [])
    return <>
        <button
            onClick={() => {
                window.ipc.send('launcher-url', 'url11111')
            }}
        >
            test launcher-url
        </button>
        <p>{message}</p>
    </>

}