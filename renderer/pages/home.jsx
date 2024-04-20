import React from 'react'
import Head from 'next/head'
import { OfficalLoginForm } from '../components/LoginForm/OfficalLoginForm'
import { SelfHostLoginForm } from '../components/LoginForm/SelfHostLoginForm'
// import { Popup } from './_app'

export default function HomePage() {
  //

  // let active = "bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white"
  // let inactive = "bg-[white] text-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest"

  // const [chosen, setChosen] = React.useState('official')

  return (
    <React.Fragment>
      <Head>
        <title>Timeversation</title>
      </Head>
      <div className='bg-gray-100 p-2 w-full h-full'>
        <section className="flex items-start justify-around py-12 mx-auto">
          <div className="">
            <h1 className="max-w-xl font-serif text-4xl font-medium tracking-wide text-[#343D33] capitalize md:text-6xl">
              Timeversation
            </h1>
            <p className="max-w-lg mt-4 text-gray-500">
              Save time with your words.
            </p>

            <div className='my-5 border-t border-[#475F45]'></div>
            {/* <div className="mt-6 flex items-center justify-center">
              <a
                onClick={() => {
                  setChosen('official')
                }}
                className={'mr-2 ' + (chosen === 'official' ? active : inactive)}
              >
                Official Serverz
              </a>
              <a
                onClick={() => {
                  setChosen('selfhost')
                }}
                className={chosen === 'selfhost' ? active : inactive}
              >
                Your Own Server
              </a>
            </div> */}
            <div className=''>
              <>
                <OfficalLoginForm></OfficalLoginForm>
                {/*               
                {chosen === 'official' && <OfficalLoginForm></OfficalLoginForm>}
                {chosen === 'selfhost' && <SelfHostLoginForm></SelfHostLoginForm>} */}

              </>

            </div>
            <div className='text-right'>
              <button className='text-xs text-gray-500 underline'>Connect to Your Own Server</button>
            </div>
          </div>
          <div>
            <div className="h-[24rem] w-[18rem] mt-12 lg:mt-0 mx-auto max-w-md overflow-hidden rounded-t-full outline outline-4 outline-offset-4 outline-[#475F45]/40">
              <img
                className="object-cover w-full h-full rounded-t-full"
                src="/images/artem-militonian-UYW6FZLlnL8-unsplash.jpg"
                alt="main page"
              />
            </div>
          </div>
        </section>


      </div>
    </React.Fragment>
  )
}

