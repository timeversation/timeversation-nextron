import React, { useEffect } from 'react'
import Head from 'next/head'
import { Protect } from 'components/Protect/Protect'
export default function NextPage() {




  return (
    <>
      <Head>
        <title>Welcome to Timeversation</title>
      </Head>

      <Protect onOK={({ router }) => {
        router.push('/app')
      }}>
        <div className='bg-gray-100 p-2 w-full h-full flex items-center justify-center'>
          <div>
            Loading...
          </div>
        </div>
      </Protect>
    </>
  )
}
