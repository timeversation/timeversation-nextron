export function GUI({ Content = () => null, ...params }) {
    return <>
        <div className="rounded-2xl bg-white absolute top-[30%] left-[25%] w-[50%] h-[35%]">
            {<Content {...params}></Content>}
        </div>
    </>
}