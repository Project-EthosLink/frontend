import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import { TabPanel } from '@mui/joy';
import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client';


export default function Form() {

    const [disableTab2, setDisableTab2] = useState(true)
    const { user, isLoading, error } = useUser();

    useEffect(() => {
        if (user) {
            setDisableTab2(false)
        }
    }, [user])

    return (
        <div className='mt-[100px]'>
            <Tabs aria-label="Basic tabs" defaultValue={0}>
                <TabList>
                    <Tab variant="soft" color="neutral" indicatorInset value={0}>Sign In</Tab>
                    <Tab variant="soft" color="neutral" indicatorInset disabled={disableTab2} value={1}>Your Details</Tab>
                    {/* <Tab variant="soft" color="neutral" indicatorInset disabled={disableTab3}>Third tab</Tab> */}
                </TabList>
                <TabPanel value={0}>
                    <div className='flex flex-col items-center justify-center h-[70vh]'>
                        {user
                            ? <>
                            <div className={`relative rounded-xl text-white text-lg flex items-center bg-black py-5 px-5`}>Signed In with WorldCoin</div>
                            <div className="text-lg text-gray-800 mt-3">Fill your details in next tab</div>
                            </>
                            : <Link href="/api/auth/login" className={`relative rounded-xl text-white text-lg flex items-center bg-black py-5 px-5`}>Sign In with WorldCoin</Link>
                        }

                        {/* <button onClick={() => setDisableTab2(false)}>Enable second tab</button>
                        <button onClick={() => setDisableTab3(false)}>Enable third tab</button> */}
                    </div>
                </TabPanel>
                <TabPanel value={1}>
                    <form>
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Location</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What you make as a Creator</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Platforms where you are present</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                        </div>
                        <div class="mb-6">
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About Yourself</label>
                            <textarea type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <button type="button" className="relative rounded-xl text-white text-lg flex items-center bg-black py-3 px-5">Submit</button>
                    </form>
                </TabPanel>
            </Tabs>
        </div>

    )
}