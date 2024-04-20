import { Popup, Overlay } from '../components/UI/Overlay/Overlay'
import '../components/global.css'

export default function App({ Component, pageProps }) {


    return <>
        <Component {...pageProps} />
        <Overlay></Overlay>
    </>
}

export { Popup }
