import CreatorProfile from "../../components/Creators/Index";
import { useRouter } from "next/router";

export default function Index(){

    const router = useRouter();

    const username = router.query.username;

    return <CreatorProfile username={username} />
}