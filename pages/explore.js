import Explore from "/components/Explore";

export default function index(props){
    return <Explore data={props.post} />
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