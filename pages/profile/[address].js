import Profile from "../../components/Profile/Users/Index"
import { useRouter } from "next/router";

export default function Index(props) {

    const router = useRouter();

    const address = router.query.address;

    return <Profile address={address} data={props.post}/>
}

export async function getServerSideProps(context) {
    const post = {}
    const { address } = context.query;

    const response = await fetch(
        "https://api.studio.thegraph.com/query/50677/ethoslink/v0.0.41",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `
              {
                socialTokenHoldings {
                    id
                    Creator
                    Holder
                    IsLaunched
                    LaunchingPrice
                    SocialTokenId
                    TotalAmountMinted
                    URI
                    AmountOwnedByHolder
                    AmountListedByHolder
                    AmountAvailbleforSale
                  }
              }
          `,
            }),
        }
    );
    const result = await response.json();
    console.log(result)
    post.socialTokenHoldings = result.data["socialTokenHoldings"]

    return {
        props: {
            post,
        },
    };
}