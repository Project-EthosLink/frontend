import CreatorProfile from "../../components/Creators/Index";
import { useRouter } from "next/router";

export default function Index(props){

    const router = useRouter();

    const username = router.query.username;

    return <CreatorProfile data={props.post} username={username} />
}

export async function getServerSideProps(context) {
    const post = {}

    const response = await fetch(
        "https://api.studio.thegraph.com/query/50677/ethoslink/v0.0.41",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `
              {
                creators {
                    CreatorAddress
                    URI
                    id
                    tokenId
                  }
              }
          `,
            }),
        }
    );
    const result = await response.json();
    console.log(result)
    post.creators = result.data["creators"]

    return {
        props: {
            post,
        },
    };
}