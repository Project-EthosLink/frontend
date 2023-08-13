import { getContract } from '../utils/constants/getContracts';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';

export default function TokenGating({ id }) {
  const router = useRouter();
  console.log(id);
  const Id = id;
  const verify = async () => {
    try {
      const token = await getContract();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const address = await provider.getSigner().getAddress();
      console.log(address);
      const tx = await token.balanceOf(address, Id);
      console.log(Id);
      console.log(ethers.utils.formatEther(tx) > 0);
      if (ethers.utils.formatEther(tx) > 0) {
        router.push('https://goerli.basescan.org/address/0xe6e73e2a6ab5023d38607da57b09c4beb3647259#readContract');
      } else {
        alert('You are not authorized to view this content');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="h-full w-full flex justify-center items-center mt-[150px]">
      <button className="relative rounded-xl text-white text-lg flex items-center bg-black py-3 px-5" onClick={verify}>
        Verify
      </button>
      <h1 className="absolute top-0 right-0 text-4xl text-white font-bold">{id}</h1>
    </main>
  );
}
