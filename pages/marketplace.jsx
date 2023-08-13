import Marketplace from '/components/Marketplace/Index';

export default function Index(props) {
  return <Marketplace data={props.post} />;
}

export async function getServerSideProps(context) {
  const post = {};
  const { address } = context.query;

  const response = await fetch('https://api.studio.thegraph.com/query/50677/ethoslink/v0.0.41', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
              {
                socialTokenHoldings {
                    id
                    Creator
                    Holder
                    SocialTokenId
                    TotalAmountMinted
                    URI
                    AmountOwnedByHolder
                    AmountListedByHolder
                    AmountAvailbleforSale
                    PriceSetByHolder
                    ReSaleRoyalty
                    LaunchingPrice
                  }
              }
          `
    })
  });
  const result = await response.json();
  console.log(result);
  post.socialTokenHoldings = result.data['socialTokenHoldings'];

  return {
    props: {
      post
    }
  };
}
