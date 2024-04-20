import React from 'react'
import Head from 'next/head'
// import { Popup } from './_app'

export default function HomePage() {
  //

  return (
    <React.Fragment>
      <Head>
        <title>Timeversation</title>
      </Head>
      <div className='bg-gray-100 p-2 w-full h-full'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-4xl font-bold'>Timeversation</h1>
          <p className='text-lg'>Conversations that saves time and automate stuff.</p>
          <div className=' h-72 m-3 w-[400px]'>
            Login
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
