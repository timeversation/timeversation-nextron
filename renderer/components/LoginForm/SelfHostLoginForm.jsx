export function SelfHostLoginForm() {
    let active = "bg-[#475F45] hover:bg-[#475F45]/80 duration-300 transition-colors border-2 border-[#475F45] px-6 block text-center py-3 uppercase text-sm font-bold leading-4 tracking-widest text-white"

    return <>
        <div className="relative flex flex-col break-words w-full rounded-lg bg-blueGray-200 border-0 ">
            <div className="flex-auto py-5">
                <form>
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            WebSite Address
                        </label>
                        <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="WebSite domain such as Example.com"
                        />
                    </div>

                    <div className="text-center mt-6">
                        <button
                            className={active}
                            type="button"
                            onClick={() => {
                                //

                            }}
                        >
                            Connect
                        </button>
                    </div>
                </form>
            </div>
        </div></>
}