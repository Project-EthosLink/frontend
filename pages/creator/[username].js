import Profile from "../../components/Profile/Index";
import { useRouter } from "next/router";

export default function Index(){

    const router = useRouter();

    const username = router.query.username;

    return <Profile username={username} />
}