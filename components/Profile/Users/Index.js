import AuthKit from '../../AuthKit/AuthKit';
import { useAccountAbstraction } from '../../../store/accountAbstractionContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '/components/ui/card';
import { Button } from '/components/ui/button';
import { Input } from "/components/ui/input"
import { getContract } from '../../../utils/constants/getContracts';
import { ethers } from 'ethers';

export default function Profile() {
  const { ownerAddress } = useAccountAbstraction();
  const LaunchToken = async () => {
    try {
      const token = await getContract();
      const tx = await token.launchSocialToken('5', '10');
      await tx.wait();
    } catch (error) {
      console.log(error);
    }
  };
  const ListToken = async () => {
    try {
      const token = await getContract();
      const tx = await token.listTokens('10', '5', '10');
      console.log(tx);
      await tx.wait();
    } catch (error) {
      console.log(error);
    }
  };
  const UnlistToken = async () => {
    try {
      const token = await getContract();
      const tx = await token.withdrawTokens('10', '5');
      console.log(tx);
      await tx.wait();
    } catch (error) {
      console.log(error);
    }
  };

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
        <div className="flex flex-wrap gap-4 mt-8 mb-8">
          <Card className="w-[300px]">
            <CardHeader>
              <CardTitle>Social Token</CardTitle>
              <CardDescription>Manage your social token status</CardDescription>
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
            <Input type="number" placeholder="Launching Price" />
            <Input type="number" placeholder="Launching Amount" />
              <Button variant="outline" onClick={LaunchToken}>
                Launch
              </Button>
              <Input type="number" placeholder="Listing Price" />
              <Input type="number" placeholder="Listing Amount" />
              <Button onClick={ListToken}>List on marketplace</Button>
              <Input type="number" placeholder="UnListing Amount" />
              <Button onClick={UnlistToken}>UnList from marketplace</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
