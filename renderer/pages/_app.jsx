import { useEffect } from 'react'
import { Popup, Overlay } from '../components/UI/Overlay/Overlay'
import '../components/global.css'
import { Libre_Franklin } from 'next/font/google'
import { Inter } from 'next/font/google'
const titleFont = Libre_Franklin({ subsets: ['latin'], weights: ['variable'] })
const paragraphFont = Inter({ subsets: ['latin'], weights: ['variable'] })

export default function App({ Component, pageProps }) {
  useEffect(() => {
    //
    //
  }, [])

  useEffect(() => {
    ; (async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { ipc: api } = window

      api.onLauncherUrl((url) => {
        console.log(url)
      })

      api.setWindowIsReady(true)
    })()

    //
  }, [])


  return <>
    <style dangerouslySetInnerHTML={{
      __html:/*css*/`

      h1, h2, h3, h4, h5, h6, textarea, input, label{
        font-family: ${titleFont.style.fontFamily} !important;
      }
      
        /* Make clicks pass-through */
#nprogress {
    pointer-events: none;
  }
  
  #nprogress .bar {
    background: lime;
  
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
  
    width: 100%;
    height: 2px;
  }
  
  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px lime, 0 0 5px lime;
    opacity: 1.0;
  
    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }
  
  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }
  
  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
  
    border: solid 2px transparent;
    border-top-color: lime;
    border-left-color: lime;
    border-radius: 50%;
  
    -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
  }
  
  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }
  
  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
  
  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
        `}}></style>
    <div className={`w-full h-full ${paragraphFont.className}`}>
      <Component {...pageProps} />
    </div>
    <Overlay></Overlay>
  </>
}

export { Popup }
