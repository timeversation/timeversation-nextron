export function Backdrop({ onCancel = () => { } }) {
    return <>
        <div onClick={() => {
            onCancel()
        }} className="absolute top-0 left-0 bg-black bg-opacity-15 w-full h-full">
        </div>
    </>
}