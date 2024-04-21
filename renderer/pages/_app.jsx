import { useEffect } from 'react'
import { Popup, Overlay } from '../components/UI/Overlay/Overlay'
import '../components/global.css'

export default function App({ Component, pageProps }) {

    useEffect(() => {
        // launcher-urls
    }, [])

    return <>
        <Component {...pageProps} />
        <Overlay></Overlay>
    </>
}

export { Popup }
