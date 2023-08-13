import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '/components/ui/table';
import { getContract } from '../../utils/constants/getContracts';
import style from '../Style.module.css';
import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';
import { ethers } from 'ethers';

export default function Marketplace(props) {
  const BuyToken = async (tokenId, buyingAmount, seller) => {
    try {
      const tokenContract = await getContract();
      console.log('buying token ...');
      const buyToken = await tokenContract.buySocialToken(tokenId, buyingAmount, seller, { value: 0 });
      await buyToken.wait();
    } catch (err) {
      console.log(err);
    }
  };
  const getProvider = async signer => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    if (signer) {
      const signer = provider.getSigner();
      return signer;
    }
    return provider;
  };

  const AttestToken = async () => {
    try {
      const EASContractAddress = '0xacfe09fd03f7812f022fbf636700adea18fd2a7a';
      const eas = new EAS(EASContractAddress);
      const signer = await getProvider(true);
      eas.connect(signer);
      const schemaEncoder = new SchemaEncoder('uint128 Token_ID,address Creator,bool trust,string Comments');
      const encodedData = schemaEncoder.encodeData([
        { name: 'Token_ID', value: '2', type: 'uint128' },
        { name: 'Creator', value: '0x375118d6461718Eeedb49aec7556C1d32Cb063BF', type: 'address' },
        { name: 'trust', value: 'true', type: 'bool' },
        { name: 'Comments', value: 'This is a comment', type: 'string' }
      ]);
      const schemaUID = '0x8295262c02e62d13c25ad13dd2b4bc11571b5665df5936e6682a5b73a2354082';

      const tx = await eas.attest({
        schema: schemaUID,
        data: {
          recipient: '0x375118d6461718Eeedb49aec7556C1d32Cb063BF',
          expirationTime: 0,
          revocable: true, // Be aware that if your schema is not revocable, this MUST be false
          data: encodedData
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(props.data.socialTokenHoldings.filter(item => item.AmountListedByHolder > 0));

  function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength) + '...';
    }
  }

  const getEthosLink = async () => {
    const tokenContract = await getContract();
    const ethosLink = await tokenContract.getEthosLink();
    await ethosLink.wait();
    console.log('gotcha');
  };

  return (
    <main className=" text-white w-4/5 m-auto mt-[100px] text-xl">
      {/* <h1 className="text-white">marketplace</h1> */}
      <button
        onClick={getEthosLink}
        className={`relative m-auto rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 hover:shadow-none px-4 ${style.buttonBorderGradient} ${style.shadowButton}`}>
        {' '}
        Get Ethos{' '}
      </button>
      <Table>
        <TableCaption>A list of listed social token.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Token ID</TableHead>
            <TableHead>Creator</TableHead>
            <TableHead>Holder</TableHead>
            <TableHead>Price by Holder</TableHead>
            <TableHead className="text-center">Launching price</TableHead>
            <TableHead className="text-center">ReSale Royalty</TableHead>
            <TableHead className="">Amount</TableHead>
            <TableHead className="text-center">Buy</TableHead>
            <TableHead className="text-center">Attest</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.data.socialTokenHoldings
            .filter(item => item.AmountListedByHolder > 0)
            .map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{data.SocialTokenId}</TableCell>
                <TableCell>{truncateString(data.Creator, 10)}</TableCell>
                <TableCell>{truncateString(data.Holder, 10)}</TableCell>
                <TableCell className="text-center">{data.PriceSetByHolder}</TableCell>
                <TableCell className="text-center">{data.LaunchingPrice}</TableCell>
                <TableCell className="text-center">{data.ReSaleRoyalty}%</TableCell>
                <TableCell className="text-center">{data.AmountListedByHolder}</TableCell>
                <TableCell className="flex justify-center">
                  <button
                    onClick={() => {
                      console.log(data.SocialTokenId, data.AmountListedByHolder, data.Holder);
                      BuyToken(data.SocialTokenId, data.AmountListedByHolder, data.Holder);
                    }}
                    className={`relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 hover:shadow-none px-4 ${style.buttonBorderGradient} ${style.shadowButton}`}>
                    {' '}
                    BUY{' '}
                  </button>
                </TableCell>
                <TableCell className="">
                  <button
                    onClick={AttestToken}
                    className={`relative m-auto rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 hover:shadow-none px-4 ${style.buttonBorderGradient} ${style.shadowButton}`}>
                    {' '}
                    Attest{' '}
                  </button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </main>
  );
}
