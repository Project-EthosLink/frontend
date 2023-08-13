import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '/components/ui/table';
import { getContract } from '../../utils/constants/getContracts';
import style from '../Style.module.css';
import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';
import { ethers } from 'ethers';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card'
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal'
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer'
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card'
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal'
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer'
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card'
  }
];

export default function Marketplace() {
  const BuyToken = async () => {
    try {
      const tokenContract = await getContract();
      console.log('buying token ...');
      const buyToken = await tokenContract.buySocialToken('1', '1', '0x375118d6461718Eeedb49aec7556C1d32Cb063BF');
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

    const newAttestationUID = await tx.wait();

    console.log('New attestation UID:', newAttestationUID);
  };

  return (
    <main className=" text-white w-4/5 m-auto mt-[100px] text-xl">
      {/* <h1 className="text-white">marketplace</h1> */}
      <Table>
        <TableCaption>A list of listed social token.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Token ID</TableHead>
            <TableHead>Creator</TableHead>
            <TableHead>Price by Holder</TableHead>
            <TableHead>Launching price revenue royalty</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map(invoice => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              <TableCell className="text-right">
                <button
                  onClick={BuyToken}
                  className={`relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 hover:shadow-none px-4 ${style.buttonBorderGradient} ${style.shadowButton}`}>
                  {' '}
                  BUY{' '}
                </button>
              </TableCell>
              <TableCell className="text-right">
                <button
                  onClick={AttestToken}
                  className={`relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 hover:shadow-none px-4 ${style.buttonBorderGradient} ${style.shadowButton}`}>
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
