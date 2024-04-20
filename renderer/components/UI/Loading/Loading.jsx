export function Loading({ text }) {
    return <>
        <div className="rounded-2xl bg-white absolute top-[30%] left-[25%] w-[50%] h-[35%] p-4 flex items-center justify-center">
            {text}
        </div>
    </>
}