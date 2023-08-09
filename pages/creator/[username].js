import Profile from "../../components/Profile/Index";
import { useRouter } from "next/router";

export default function Index(){

    const router = useRouter();


    return <Profile />
}