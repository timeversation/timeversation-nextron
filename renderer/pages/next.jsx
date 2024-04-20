import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function NextPage() {
  return (
    <>
      <Head>
        <title>Next - Nextron (basic-lang-javascript)</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/home">
            <a>Go to home page</a>
          </Link>
        </p>

        <button className='m-2 bg-blue-500 text-white rounded-xl text-xl p-4 px-6' onClick={() => {
          Popup.gui({
            Content: ({ close }) => <div className='flex items-center justify-center w-full h-full'>
              <p>1111Connecting to Self Hosting Server...</p>
              <button onClick={() => {
                close()
              }}>close</button>
            </div>,
          })
        }}>Connect to Offical Server</button>

        <button className='m-2 bg-purple-400 text-white rounded-xl p-3 px-6' onClick={() => {
          Popup.gui({
            Content: ({ close }) => <div className='flex items-center justify-center w-full h-full'>
              <p>1111Connecting to Self Hosting Server...</p>
              <button onClick={() => {
                close()
              }}>close</button>
            </div>,
          })
        }}>Connect to Self-Hosting</button>
      </div>
    </>
  )
}
