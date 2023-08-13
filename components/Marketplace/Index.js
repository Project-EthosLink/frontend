import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '/components/ui/table';
import { getContract } from '../../utils/constants/getContracts';
import style from "../Style.module.css"

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
  },
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

  return (
    <main className=" text-white w-4/5 m-auto mt-[100px] text-xl">
      {/* <h1 className="text-white">marketplace</h1> */}
      <Table>
        <TableCaption>A list of listed social token.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
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
              <TableCell className="text-right">
                <button onClick={BuyToken} className={`relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 hover:shadow-none px-4 ${style.buttonBorderGradient} ${style.shadowButton}`}> BUY </button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
