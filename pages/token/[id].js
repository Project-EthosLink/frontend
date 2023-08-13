import { useRouter } from 'next/router';
import TokenGating from '../../components/TokenGating';

export default function (props) {
  const router = useRouter();
  const { id,CreatorAddress } = router.query;
  console.log(router.query)
  return <TokenGating id={id} data={props.post} CreatorAddress={CreatorAddress}/>;
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
