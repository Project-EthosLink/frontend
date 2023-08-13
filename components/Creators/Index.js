import { useState, useCallback, useEffect } from 'react';
import BenefitModal from './BenefitModal';
import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';
import { ethers } from 'ethers';
import AttestModal from './AttestModal';
import { useAccountAbstraction } from '../../store/accountAbstractionContext';

export const AttestonCreator = async () => {
  useEffect(() => {
    axios({
      url: 'https://base-goerli.easscan.org/graphql',
      method: 'post',
      data: {
        query: `
      query AggregateAttestation {
  aggregateAttestation(where: {
    schemaId: {
      equals: "0x45fa4b5a5c173af72329ac4dbaa243812872add36d3a806992c7cc7511c3d151"
    }
  }) {
    _count {
      _all
    }
  }
}
      `
      }
    }).then(result => {
      console.log(result.data);
    });
  }, []);
  const getProvider = async signer => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    if (signer) {
      const signer = provider.getSigner();
      return signer;
    }
    return provider;
  };

  const EASContractAddress = '0xacfe09fd03f7812f022fbf636700adea18fd2a7a';
  const eas = new EAS(EASContractAddress);
  const signer = await getProvider(true);
  eas.connect(signer);
  const schemaEncoder = new SchemaEncoder('bool Trust');
  const encodedData = schemaEncoder.encodeData([{ name: 'Trust', value: 'true', type: 'bool' }]);
  const schemaUID = '0x45fa4b5a5c173af72329ac4dbaa243812872add36d3a806992c7cc7511c3d151';

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

export default function CreatorProfile(props) {
  const [open, setOpen] = useState(false);
  const [attestOpen, setAttestOpen] = useState(false)
  const [creatorData, setCreatorData] = useState([]);
  const [creators, setCreators] = useState(props.data.creators);
  const { ownerAddress } = useAccountAbstraction();
  const [loading, setLoading] = useState(false);

  const setOpenHandler = state => {
    setOpen(state);
  };

  const setAttestOpenHandler = state => {
    setAttestOpen(state);
  };

  const creatorForLoop = useCallback(async () => {
    setLoading(true);

    const tempChoicesArray = [];

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    for (let i = 0; i < creators.length; i++) {
      let obj = {};
      if (creators[i].URI.length > 10 && creators[i].CreatorAddress == props.username) {
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

  console.log(creatorData)

  const getProvider = async signer => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    if (signer) {
      const signer = provider.getSigner();
      return signer;
    }
    return provider;
  };

  const AttestOnProject = async () => {
    const EASContractAddress = '0xacfe09fd03f7812f022fbf636700adea18fd2a7a';
    const eas = new EAS(EASContractAddress);
    const signer = await getProvider(true);
    eas.connect(signer);
    const schemaEncoder = new SchemaEncoder('string projectDescription,string comments,address creator');
    const encodedData = schemaEncoder.encodeData([
      { name: 'projectDescription', value: 'This is a project description', type: 'string' },
      { name: 'comments', value: 'This is a comment', type: 'string' },
      { name: 'creator', value: '0x375118d6461718Eeedb49aec7556C1d32Cb063BF', type: 'address' }
    ]);

    const schemaUID = '0xb229bccf268712787be5cbfd89e4d890e32e84d3910096f588a32dbeb6607096';

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
    <main className="profile-page ">
      {creatorData.map((data) => {
        return (
          <>
            <section className="relative block h-[500px]">
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')"
                }}>
                <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
              </div>
              <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                style={{ transform: 'translateZ(0px)' }}>
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0">
                  <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
              </div>
            </section>
            <section className="relative py-16">
              <div className="container mx-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                  <div className="px-6 bg-slate-200 rounded-md border-[1px] border-gray-600">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div className="">
                          <img
                            alt="..."
                            src={`https://api.dicebear.com/5.x/bottts/svg?seed=${data.CreatorAddress}`}
                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div className="py-6 px-3 mt-32 sm:mt-0">
                          <button
                            className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                            type="button">
                            Follow
                          </button>
                          <button
                            onClick={() => setOpenHandler(!open)}
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button">
                            Benefits
                          </button>
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4 lg:order-1">
                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                          <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span>
                            <span className="text-sm text-blueGray-400">Friends</span>
                          </div>
                          <div className="mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span>
                            <span className="text-sm text-blueGray-400">Photos</span>
                          </div>
                          <div className="lg:mr-4 p-3 text-center">
                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span>
                            <span className="text-sm text-blueGray-400">Comments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-12">
                      <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">{data.name}</h3>
                      <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                        {data.location}
                      </div>
                      <div className="mb-2 text-blueGray-600 mt-10">
                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>{data.creatorType}
                      </div>
                      <div className="mb-2 text-blueGray-600">
                        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>{data.platforms}
                      </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blue-200 text-center">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                          <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                            {data.about}
                          </p>
                          <a href={`${data.socialLinks}`} className="font-normal text-pink-500">
                            {data.socialLinks}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="py-10 text-center">
                      <span>is this a correct profile ?{'  '}</span>
                      <button
                        onClick={() => setAttestOpenHandler(true)}
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                        Attest
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <BenefitModal open={open} setOpen={setOpenHandler} tokenId={data.tokenId} />
            <AttestModal open={attestOpen} setOpen={setAttestOpenHandler} />
          </>
        )
      })}
    </main>
  );
}
