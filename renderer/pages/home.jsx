import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useServer } from 'components/store/useServer'
import { useRouter } from 'next/router'

export default function NextPage() {
  let router = useRouter()
  useEffect(() => {
    //

    useServer.getState().loadBackendFromLocalStorage().then(() => {
      //
      let jwt = useServer.getState().jwt

      if (jwt) {
        useServer.getState().verifyJWT({ jwt }).then(() => {
          console.log('verified')
          router.push('/app')
        })
      } else {
        router.push('/auth')
      }

      //
    })
  }, [])
  return (
    <>
      <Head>
        <title>Welcome to Timeversation</title>
      </Head>


      <div className='bg-gray-100 p-2 w-full h-full flex items-center justify-center'>
        <div>
          Loading...
        </div>
      </div>
    </>
  )
}
