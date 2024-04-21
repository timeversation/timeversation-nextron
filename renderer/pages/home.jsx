import React, { useEffect } from 'react'
import Head from 'next/head'
import { OfficalLoginForm } from '../components/LoginForm/OfficalLoginForm'
import { SelfHostLoginForm } from '../components/LoginForm/SelfHostLoginForm'
// import { Popup } from './_app'

export default function HomePage() {
  //

  let active = " w-64 bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white"
  let inactive = "  w-64 bg-[white] text-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest"
  // let inactive = "border-2 text-sm duration-300 transition-colors hover:bg-[#475F45] hover:text-white font-bold leading-4 mt-4 sm:mt-0 tracking-widest text-[#475F45] sm:mx-4 border-[#475F45] px-6 block text-center py-3 uppercase"

  const [chosen, setChosen] = React.useState('official')

  return (
    <React.Fragment>
      <Head>
        <title>Timeversation</title>
      </Head>
      <div className='bg-gray-100 p-2 w-full h-full'>
        <section className="flex items-start justify-center max-w-3xl py-12 mx-auto">
          <div className=" ">
            <h1 className="font-serif font-medium tracking-wide text-[#343D33] capitalize text-6xl">
              Timeversation
            </h1>
            <p className="max-w-lg mt-4 text-gray-500 text-center">
              Save time with your words.
            </p>

            {/* launcher-url
             */}
            <div className="mt-6 flex items-center justify-center mb-5">
              <a
                onClick={() => {
                  setChosen('official')
                }}
                className={'mr-2 ' + (chosen === 'official' ? active : inactive)}
              >
                Official Server
              </a>
              <a
                onClick={() => {
                  setChosen('selfhost')
                }}
                className={chosen === 'selfhost' ? active : inactive}
              >
                Your Own Server
              </a>
            </div>
            <div className='flex justify-center'>
              <>
                {chosen === 'official' && <OfficalLoginForm></OfficalLoginForm>}
                {chosen === 'selfhost' && <SelfHostLoginForm></SelfHostLoginForm>}
              </>

            </div>
          </div>
          <div>

          </div>
        </section>


      </div>
    </React.Fragment>
  )
}

