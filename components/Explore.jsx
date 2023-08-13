export default function Explore() {
    return (
        <main className="mt-[120px] p-10">
            <h1 className="text-white text-2xl font-semibold mb-8">Social Token Owned</h1>
            <div className="flex flex-col items-center justify-between w-fit">
                <div className="block bg-gray-900 w-[200px] h-[200px] p-5 rounded-full">
                    <img src={`https://api.dicebear.com/5.x/bottts/svg`} className="w-[150px]" />
                </div>
                <h3 className="text-white text-lg font-semibold mt-3">Token Name</h3>
            </div>
        </main>
    )
}