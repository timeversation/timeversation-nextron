export function Confirmation({ onConfirm, onCancel }) {
    return <>
        <div className="rounded-2xl bg-white absolute top-[30%] left-[25%] w-[50%] h-[35%] p-4">
            <div className="w-full h-full flex flex-col justify-between">
                <div>
                    <h1 className="text-2xl">Confirm...</h1>
                    <p className="text-lg">Are you sure you want to do this?</p>
                </div>
                <div className="flex justify-end">
                    <button className=" bg-gray-500 text-white p-3 rounded-xl mr-5" onClick={() => {
                        onCancel()
                    }}>Cancel</button>
                    <button className=" bg-green-500 text-white px-8 p-3 rounded-xl" onClick={() => {
                        onConfirm()
                    }}>Confirm</button>
                </div>
            </div>
        </div>
    </>
}