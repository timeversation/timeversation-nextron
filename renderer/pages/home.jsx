import React from 'react'
import Head from 'next/head'
export default function HomePage() {
  //
  return (
    <React.Fragment>
      <Head>
        <title>Timeversation trians your ai persona as you communicate.</title>
      </Head>
      <div className='bg-gray-100 p-2 w-full h-full'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-4xl font-bold'>Timeversation</h1>
          <p className='text-lg'>Train your ai persona as you communicate.</p>
          <button className='m-2 bg-blue-500 text-white rounded-xl text-xl p-4 px-6'>Connect to Official Server</button>
          <button className='m-2 bg-purple-400 text-white rounded-xl p-3 px-6'>Connect to Self-Hosting</button>
        </div>
      </div>
    </React.Fragment>
  )
}

