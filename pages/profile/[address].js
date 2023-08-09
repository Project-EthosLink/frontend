import Profile from "../../components/Profile/Users/Index"
import { useRouter } from "next/router";

export default function Index(){

    const router = useRouter();

    const address = router.query.address;

    return <Profile address={address}/>
}