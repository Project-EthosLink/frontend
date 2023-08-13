import AuthKit from "../../AuthKit/AuthKit";
import { useAccountAbstraction } from "../../../store/accountAbstractionContext";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "/components/ui/card"
import { Button } from "/components/ui/button"


export default function Profile() {

    const { ownerAddress } = useAccountAbstraction()

    return (
        <main className="text-white mt-[120px] flex flex-col">
            <section className=" flex items-center justify-around">
                <span className=" bg-gray-900 w-[200px] h-[200px] p-5 rounded-full">
                    <img src={`https://api.dicebear.com/5.x/bottts/svg?seed=${ownerAddress}`} className="w-[150px]" />
                </span>
                <AuthKit />
            </section>
            <section className=" mx-10 mt-8">
                <h1 className=" text-4xl font-semibold">Social Token Owned</h1>
                <div className="flex flex-wrap gap-4 mt-8">
                    <Card className="w-[300px]">
                        <CardHeader>
                            <CardTitle>Social Token</CardTitle>
                            <CardDescription>Manage your social token status</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">

                                    </div>
                                    <div className="flex flex-col space-y-1.5">

                                    </div>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex justify-between flex-col gap-4">
                            <Button variant="outline">Launch</Button>
                            <Button>List on marketplace</Button>
                            <Button>UnList from marketplace</Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </main>
    )
}