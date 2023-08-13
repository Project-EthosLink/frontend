import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import { TabPanel } from '@mui/joy';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { getContract } from '../../utils/constants/getContracts';
import { ethers } from 'ethers';
import { saveMetaData } from '../../utils/saveMetaDataToIPFS';

export default function Form() {
  const [disableTab2, setDisableTab2] = useState(true);
  const { user, isLoading, error } = useUser();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [creatorType, setCreatorType] = useState('');
  const [platforms, setPlatforms] = useState();
  const [socialLinks, setSocialLinks] = useState();
  const [about, setAbout] = useState('');

  useEffect(() => {
    if (user) {
      setDisableTab2(false);
    }
  }, [user]);

  const mintUser = async e => {
    e.preventDefault();
    try {
      const contract = await getContract();
      const obj = {
        name: name,
        location: location,
        creatorType: creatorType,
        platforms: platforms,
        socialLinks: socialLinks,
        about: about
      };
      const URI = await saveMetaData(obj);
      const tx = await contract.registerCreator(URI);
      await tx.wait();
      console.log('Minted');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-[100px]">
      <Tabs aria-label="Basic tabs" defaultValue={0}>
        <TabList>
          <Tab variant="soft" color="neutral" indicatorInset value={0}>
            Sign In
          </Tab>
          <Tab variant="soft" color="neutral" indicatorInset disabled={disableTab2} value={1}>
            Your Details
          </Tab>
          {/* <Tab variant="soft" color="neutral" indicatorInset disabled={disableTab3}>Third tab</Tab> */}
        </TabList>
        <TabPanel value={0}>
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <div className="text-center mb-[30px]">
              <strong>Are you a person? Verify</strong>
            </div>
            {user ? (
              <>
                <div className={`relative rounded-xl text-white text-lg flex items-center bg-black py-5 px-5`}>
                  Signed In with WorldCoin
                </div>
                <div className="text-lg text-gray-800 mt-3">Fill your details in next tab</div>
              </>
            ) : (
              <Link
                href="/api/auth/login"
                className={`relative rounded-xl text-white text-lg flex items-center bg-black py-5 px-5`}>
                Sign In with WorldCoin
              </Link>
            )}
            <div className="mt-[120px] text-center">
              <strong>
                <span className=" underline text-xl">Note:</span> After verifying your World ID, you will be redirected
                to <span className=" underline text-purple-900">Homepage</span>. So, again You have to come to this page
                and fill Your Personal details.
                <br />
                <span className=" underline text-purple-900">
                  Until You fill your personal details users will Not be able to find you
                </span>
              </strong>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={1}>
          <form className=" w-3/4 flex justify-center flex-col items-center m-auto">
            <div className="mb-6 w-full">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your Name
              </label>
              <input
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Arya"
                required
                onChange={e => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-6 w-full">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your Location
              </label>
              <input
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Paris"
                required
                onChange={e => {
                  setLocation(e.target.value);
                }}
              />
            </div>
            <div className="mb-6 w-full">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                What you make as a Creator
              </label>
              <input
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Videos, Blogs"
                required
                onChange={e => {
                  setCreatorType(e.target.value);
                }}
              />
            </div>
            <div className="mb-6 w-full">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Platforms where you are present
              </label>
              <input
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Youtube, Twitch, Tik-Tok"
                required
                onChange={e => {
                  setPlatforms(e.target.value);
                }}
              />
            </div>
            <div className="mb-6 w-full">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Website through which you will provide perks to your social token holder (include https:// in URL)
              </label>
              <input
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="https://www.google.com"
                required
                onChange={e => {
                  setSocialLinks(e.target.value);
                }}
              />
            </div>
            <div class="mb-6 w-full">
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                About Yourself
              </label>
              <textarea
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="what you want your fans to know about you"
                required
                onChange={e => {
                  setAbout(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              onClick={mintUser}
              className="relative rounded-xl text-white text-lg flex items-center bg-black py-3 px-5">
              Submit
            </button>
          </form>
        </TabPanel>
      </Tabs>
    </div>
  );
}
