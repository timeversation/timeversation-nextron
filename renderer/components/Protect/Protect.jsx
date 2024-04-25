
import { useServer } from 'components/store/useServer'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export function Protect({ children, onOK = () => { } }) {
    let router = useRouter()
    useEffect(() => {
        //

        useServer.getState().loadBackendFromLocalStorage().then(() => {
            //
            let jwt = useServer.getState().jwt

            if (jwt) {
                useServer.getState().verifyJWT({ jwt }).then(({ ok }) => {
                    if (ok) {
                        console.log('verified')
                        onOK({ router })
                    } else {
                        useServer.getState().logout()
                        router.push('/auth')
                    }
                }).catch((e) => {
                    console.log('error', e)
                    useServer.getState().logout()
                    router.push('/auth')
                })
            } else {
                useServer.getState().logout()
                router.push('/auth')
            }
        })
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
    }, [])

    return <>
        {children}
    </>
}