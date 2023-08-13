import AuthKit from '../../AuthKit/AuthKit';
import { useAccountAbstraction } from '../../../store/accountAbstractionContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '/components/ui/card';
import { Button } from '/components/ui/button';
import { Input } from '/components/ui/input';
import { getContract } from '../../../utils/constants/getContracts';
import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';

export default function Profile(props) {
  const { ownerAddress } = useAccountAbstraction();
  const [userTokenData, setUserTokenData] = useState([]);
  const [ethAccount, setEthAccount] = useState('');
  const [launchingPrice, setLaunchingPrice] = useState('');
  const [listingPrice, setListingPrice] = useState('');
  const [listingAmount, setListingAmount] = useState('');
  const [unlistingAmount, setUnlistingAmount] = useState('');

  useEffect(() => {
    setEthAccount(ownerAddress);
  }, [ownerAddress]);

  function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength) + '...';
    }
  }

  const LaunchToken = async tokenId => {
    try {
      const token = await getContract();
      const tx = await token.launchSocialToken(tokenId, launchingPrice);
      await tx.wait();
    } catch (error) {
      console.log(error);
    }
  };
  const ListToken = async tokenId => {
    try {
      const token = await getContract();
      const tx = await token.listTokens(listingAmount, tokenId, listingPrice);
      console.log(tx);
      await tx.wait();
    } catch (error) {
      console.log(error);
    }
  };
  const UnlistToken = async tokenId => {
    try {
      const token = await getContract();
      const tx = await token.withdrawTokens(unlistingAmount, tokenId);
      console.log(tx);
      await tx.wait();
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = useCallback(() => {
    console.log('hii');
    const filteredData = props.data.socialTokenHoldings.filter(data => {
      data.Holder > 0;
    });

    setUserTokenData(filteredData);
  }, [props.data.socialTokenHoldings, ethAccount]);

  useEffect(() => {
    console.log('hii');
    filterData();
  }, [props.data.socialTokenHoldings, ethAccount]);

  console.log(props.data.socialTokenHoldings.filter(item => item.Holder.length > 0));

  return (
    <main className="text-white mt-[120px] flex flex-col">
      <section className=" flex items-center justify-around">
        <span className=" bg-gray-900 w-[200px] h-[200px] p-5 rounded-full">
          <img src={`https://api.dicebear.com/5.x/bottts/svg?seed=${ownerAddress}`} className="w-[150px]" />
        </span>
        <AuthKit />
      </section>
      <section className=" mx-10 mt-8">
        <h1 className=" text-4xl font-semibold">Social Token Owned</h1>
        <div className="flex gap-5">
          {props.data.socialTokenHoldings
            .filter(data => data.Holder == ethAccount.toLowerCase())
            .map((element, index) => {
              return (
                <div className="flex flex-wrap gap-4 mt-8 mb-8" key={index}>
                  <Card className="w-[300px]">
                    <CardHeader>
                      <CardTitle>{truncateString(element.Holder, 15)}</CardTitle>
                      <CardDescription>
                        <div>TokenId: {element.SocialTokenId}</div>
                        <div>Creator: {truncateString(element.Creator, 10)}</div>
                        <div>AmountOwnedByHolder: {element.AmountOwnedByHolder}</div>
                        <div>AmountListedByHolder: {element.AmountListedByHolder}</div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form>
                        <div className="grid w-full items-center gap-4">
                          <div className="flex flex-col space-y-1.5"></div>
                          <div className="flex flex-col space-y-1.5"></div>
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter className="flex justify-between flex-col gap-4">
                      <Input
                        type="number"
                        placeholder="Launching Price"
                        defaultValue={element.LaunchingPrice}
                        onChange={e => {
                          setLaunchingPrice(e.target.value);
                        }}
                      />
                      <Button
                        onClick={() => {
                          LaunchToken(element.SocialTokenId);
                        }}>
                        Launch
                      </Button>
                      <Input
                        type="number"
                        placeholder="Listing Price"
                        onChange={e => {
                          setListingPrice(e.target.value);
                        }}
                      />
                      <Input
                        type="number"
                        placeholder="Listing Amount"
                        onChange={e => {
                          setListingAmount(e.target.value);
                        }}
                      />
                      <Button
                        onClick={() => {
                          ListToken(element.SocialTokenId);
                        }}>
                        List on marketplace
                      </Button>
                      <Input
                        type="number"
                        placeholder="UnListing Amount"
                        defaultValue={element.AmountListedByHolder}
                        onChange={e => {
                          setUnlistingAmount(e.target.value);
                        }}
                      />
                      <Button
                        onClick={() => {
                          UnlistToken(element.SocialTokenId);
                        }}>
                        UnList from marketplace
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              );
            })}
        </div>
      </section>
    </main>
  );
}
