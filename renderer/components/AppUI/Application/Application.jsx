import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBible, faDoorOpen, faDove, faEarth, faGear, faHandsPraying } from '@fortawesome/free-solid-svg-icons'
import { useServer } from 'components/store/useServer'
import { useRouter } from 'next/router'

export function Application() {
    let router = useRouter()

    return (
        <>
            <div className='flex flex-row h-screen bg-gray-100'>
                <div className='flex flex-col justify-between items-center flex-none w-16 bg-gray-200'>
                    <div className='flex flex-col w-full items-center pt-1'>
                        <a className='relative h-16 w-16 inline-flex justify-center items-center'>
                            <FontAwesomeIcon className='h-8 w-8' icon={faGear}></FontAwesomeIcon>
                            <div className='absolute top-2 right-2 bg-red-500 w-4 h-4 text-xs text-white rounded-full text-center'>
                                3
                            </div>
                        </a>
                        <a className='relative h-16 w-16 inline-flex justify-center items-center'>
                            <FontAwesomeIcon className='h-8 w-8' icon={faEarth}></FontAwesomeIcon>
                            <div className='absolute top-2 right-2 bg-red-500 w-4 h-4 text-xs text-white rounded-full text-center'>
                                5
                            </div>
                        </a>
                        <a className='relative h-16 w-16 inline-flex justify-center items-center'>
                            <FontAwesomeIcon className='h-8 w-8' icon={faDove}></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className='flex flex-col pb-2'>
                        <a onClick={() => {
                            useServer.getState().logout().then(() => {
                                router.push('/home')
                            })
                        }} className='relative h-16 w-16 inline-flex justify-center items-center cursor-pointer'>
                            <FontAwesomeIcon className='h-8 w-8' icon={faDoorOpen}></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
                <div className='w-64 flex-none bg-gray-100 p-4 flex flex-col space-y-4'>
                    <div className='flex flex-row justify-between items-center'>
                        <h1 className='font-semibold text-2xl'>Inbox</h1>
                        <svg
                            className='flex-none w-4 h-4'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                            />
                        </svg>
                    </div>
                    <div className=''>
                        <input
                            type='text'
                            placeholder='Search'
                            className='w-full outline-none border-b border-dashed text-black placeholder-gray-600'
                        />
                    </div>
                    <div className='bg-red-200 h-64' />
                    <div className='bg-red-200 h-64' />
                </div>
                <div className='flex flex-row flex-auto bg-white rounded-tl-xl border-l shadow-xl'>
                    <div className='flex flex-col w-2/5'>
                        <div className='flex-none h-20 border-b'>Top</div>
                        <div className='flex-auto overflow-y-auto'>
                            <a className='block border-b'>
                                <div className='border-l-2 border-transparent hover:bg-gray-100 p-3 space-y-4'>
                                    <div className='flex flex-row items-center space-x-2'>
                                        <svg
                                            className='w-5 h-5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                            />
                                        </svg>
                                        <strong className='flex-grow text-sm'>Nikola Tesla</strong>
                                        <div className='text-sm text-gray-600'>5hr</div>
                                    </div>
                                    <div className='flex flex-row items-center space-x-1'>
                                        <svg
                                            className='flex-none w-3 h-3'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                            />
                                        </svg>
                                        <div className='flex-grow truncate text-xs'>
                                            some message content whedkjwhed wkjehdkjweh dkjhwekjdhwekjhd{' '}
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className='block border-b'>
                                <div className='border-l-2 border-blue-500 bg-blue-100 p-3 space-y-4'>
                                    <div className='flex flex-row items-center space-x-2'>
                                        <svg
                                            className='w-5 h-5'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                            />
                                        </svg>
                                        <strong className='flex-grow text-sm'>Nikola Tesla</strong>
                                        <div className='text-sm text-gray-600'>5hr</div>
                                    </div>
                                    <div className='flex flex-row items-center space-x-1'>
                                        <svg
                                            className='flex-none w-3 h-3'
                                            fill='none'
                                            stroke='currentColor'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                            />
                                        </svg>
                                        <div className='flex-grow truncate text-xs'>
                                            some message content whedkjwhed wkjehdkjweh dkjhwekjdhwekjhd{' '}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='w-3/5 border-l border-r border-gray-400 flex flex-col'>
                        <div className='flex-none h-20 flex flex-row justify-between items-center p-5 border-b'>
                            <div className='flex flex-col space-y-1'>
                                <strong>Nikola Tesla</strong>
                                <input
                                    type='text'
                                    placeholder='Add coversation title'
                                    className='text-sm outline-none border-b border-dashed text-black placeholder-gray-600'
                                />
                            </div>
                            <div className='flex flex-row items-center'>
                                <svg
                                    className='w-4 h-4'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                                    />
                                </svg>
                                <svg
                                    className='w-4 h-4'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                                    />
                                </svg>
                                <svg
                                    className='w-4 h-4'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                                    />
                                </svg>
                                <svg
                                    className='w-4 h-4'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className='flex-auto overflow-y-auto p-5 space-y-4 bg-gray-50'>
                            <div className='flex flex-row space-x-2'>
                                <svg
                                    className='flex-none w-6 h-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                    />
                                </svg>
                                <div className='flex flex-col'>
                                    <div className='bg-gray-200 rounded p-5'>Some message text</div>
                                    <div className='text-sm text-gray-600'>4hr ago</div>
                                </div>
                            </div>
                            <div className='flex flex-row justify-center text-sm text-gray-600'>
                                You assigned this conversation to yourself 5d ago
                            </div>
                            <div className='flex flex-row space-x-2 flex-row-reverse space-x-reverse'>
                                <svg
                                    className='flex-none w-6 h-6'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                    />
                                </svg>
                                <div className='flex flex-col'>
                                    <div className='bg-blue-100 rounded p-5'>Some message text</div>
                                    <div className='text-sm text-gray-600'>5hr ago</div>
                                </div>
                            </div>
                        </div>
                        <div className='flex-none h-40 p-4 pt-0'>
                            <textarea
                                className='w-full h-full outline-none border focus:border-blue-600 hover:border-blue-600 rounded p-4 shadow-lg'
                                defaultValue={'Hi'}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
