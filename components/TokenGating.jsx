import { getContract } from '../utils/constants/getContracts';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import { useEffect,useCallback, useState } from 'react';

export default function TokenGating({ id ,data, CreatorAddress}) {

  const [creatorData, setCreatorData] = useState([]);
  const [creators, setCreators] = useState(data.creators);
  const [loading,setLoading] = useState(false)

  const creatorForLoop = useCallback(async () => {
    setLoading(true);

    const tempChoicesArray = [];

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    for (let i = 0; i < creators.length; i++) {
      let obj = {};
      if (creators[i].URI.length > 10 && creators[i].CreatorAddress == CreatorAddress) {
        const newresponse = await fetch(
          `https://ipfs.io/ipfs/${creators[i].URI}/CreatorData.json`,
          requestOptions
        );
        const result = await newresponse.json();
        obj = { ...result, ...creators[i] };
        tempChoicesArray.push(obj);
      }

      setLoading(false);
    }
    setCreatorData(tempChoicesArray);
  }, [creators, creatorData]);

  useEffect(() => {
    if (creators.length > 0) {
      creatorForLoop();
    }
  }, [creators]);

  console.log(creatorData[0].socialLinks)

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
        router.push(creatorData[0].socialLinks);
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
