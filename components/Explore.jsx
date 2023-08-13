import { useEffect, useCallback, useState } from "react";

export default function Explore(props) {

    const [loading,setLoading] = useState(false)
    const [creatorData, setCreatorData] = useState([]);
    const [creators, setCreators] = useState(props.data.creators);

    const creatorForLoop = useCallback(async () => {
        setLoading(true);
    
        const tempChoicesArray = [];
    
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
    
        for (let i = 0; i < creators.length; i++) {
          let obj = {};
          if (creators[i].URI.length > 8) {
            const newresponse = await fetch(
              `https://ipfs.io/ipfs/${socialToken[i].URI}/CreatorData.json`,
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
    
    //   useEffect(() => {
    //     if (creators.length > 0) {
    //       creatorForLoop();
    //     }
    //   }, [creators]);

    return (
        <main className="mt-[120px] p-10">
            <h1 className="text-white text-2xl font-semibold mb-8">Social Token Owned</h1>
            <div className="flex gap-5">
                {creators.map((data, index) => {
                    return (
                        <div className="flex flex-col items-center justify-between w-fit">
                            <div className="block bg-gray-900 w-[200px] h-[200px] p-5 rounded-full">
                                <img src={`https://api.dicebear.com/5.x/bottts/svg?seed=${data.ownerAddress}`} className="w-[150px]" />
                            </div>
                            <h3 className="text-white text-lg font-semibold mt-3">Token Name</h3>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}