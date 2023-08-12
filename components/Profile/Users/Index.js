import AuthKit from "../../AuthKit/AuthKit";
import { useAccountAbstraction } from "../../../store/accountAbstractionContext";

export default function Profile() {

    const {ownerAddress} = useAccountAbstraction()

    return (
        <main className="text-white mt-[120px] flex flex-col">
            <section className=" flex items-center justify-around">
                <span className=" bg-gray-900 w-[200px] h-[200px] p-5 rounded-full">
                    <img src={`https://api.dicebear.com/5.x/bottts/svg?seed=${ownerAddress}`} className="w-[150px]"/>
                </span>
                <AuthKit />
            </section>
            <section className=" mx-10 mt-8">
                <h1 className=" text-4xl font-semibold">Social Token Owned</h1>
            </section>
        </main>
    )
}