import style from './Style.module.css';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function Create() {
  const [allfile, setAllfile] = useState({});
  console.log(allfile);
  const [isTransferrable, setIsTransferrable] = useState(true)
  console.log(isTransferrable)

  function uploadFile() {
    document.getElementById('ipfs_file').click();
  }

  const mint = e => {
    e.preventDefault();
  };

  return (
    <main>
      <section class="relative z-10 pt-30 lg:pt-35 xl:pt-40 pb-18">
        <div class="absolute top-25 left-0 w-full flex flex-col gap-3 -z-1 opacity-50">
          <div class="w-full h-[1.24px] footer-bg-gradient"></div>
          <div class="w-full h-[2.47px] footer-bg-gradient"></div>
          <div class="w-full h-[3.71px] footer-bg-gradient"></div>
          <div class="w-full h-[4.99px] footer-bg-gradient"></div>
          <div class="w-full h-[6.19px] footer-bg-gradient"></div>
          <div class="w-full h-[7.42px] footer-bg-gradient"></div>
          <div class="w-full h-[8.66px] footer-bg-gradient"></div>
          <div class="w-full h-[9.90px] footer-bg-gradient"></div>
          <div class="w-full h-[13px] footer-bg-gradient"></div>
        </div>
        <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-dark/0 to-dark -z-1"></div>
        <div class="text-center px-4">
          <h1 class="font-extrabold text-3xl text-white mb-5.5">Mint your Social Token</h1>
          {/* <ul class="flex items-center justify-center gap-2">
                        <li class="font-medium"><a href="index.html">Home</a></li>
                        <li class="font-medium">/ Sign up</li>
                    </ul> */}
        </div>
      </section>
      <section class=" pt-16 pb-16 lg:pb-[100px] xl:pb-[110px]">
        <div class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div class="rounded-3xl bg-white/[0.05]" style={{ visibility: 'visible' }}>
            <div class="flex">
              <div class="hidden lg:block w-full lg:w-1/2">
                <div class="relative py-20 pl-[70px] pr-[88px]">
                  <div class="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-white/0 via-white/20 to-white/0"></div>
                  <h2 class="max-w-[292px] font-bold text-white text-heading-4 mb-10">
                    Unlock the Power of Community
                    <br />
                    Make your social token
                  </h2>
                  <img
                    src="https://images.unsplash.com/photo-1499540633125-484965b60031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                    alt="signin"
                    className=" opacity-50 rounded-md"
                  />
                </div>
              </div>
              <div class="w-full lg:w-1/2">
                <div class="py-8 sm:py-20 pl-8 sm:pl-[84px] pr-8 sm:pr-20">
                  <form>
                    <div class="mb-4 relative">
                      <span class="absolute top-1/2 -translate-y-1/2 left-6">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.00039 6.92499C9.85039 6.92499 11.3504 5.47499 11.3504 3.67499C11.3504 1.87499 9.85039 0.424988 8.00039 0.424988C6.15039 0.424988 4.65039 1.87499 4.65039 3.67499C4.65039 5.47499 6.15039 6.92499 8.00039 6.92499ZM8.00039 1.57499C9.22539 1.57499 10.2254 2.52499 10.2254 3.69999C10.2254 4.87499 9.22539 5.82499 8.00039 5.82499C6.77539 5.82499 5.77539 4.87499 5.77539 3.69999C5.77539 2.52499 6.77539 1.57499 8.00039 1.57499Z"
                            fill="#918EA0"></path>
                          <path
                            d="M9.62539 8.04999H6.37539C3.70039 8.04999 1.52539 10.25 1.52539 12.925V15C1.52539 15.3 1.77539 15.575 2.10039 15.575C2.42539 15.575 2.67539 15.325 2.67539 15V12.925C2.67539 10.875 4.35039 9.17499 6.42539 9.17499H9.65039C11.7004 9.17499 13.4004 10.85 13.4004 12.925V15C13.4004 15.3 13.6504 15.575 13.9754 15.575C14.3004 15.575 14.5504 15.325 14.5504 15V12.925C14.4754 10.25 12.3004 8.04999 9.62539 8.04999Z"
                            fill="#918EA0"></path>
                        </svg>
                      </span>
                      <input
                        type="name"
                        placeholder="Edition Name*"
                        class="w-full border border-white/[0.12] bg-transparent rounded-lg focus:border-purple pl-14 pr-4 py-3.5 font-medium outline-none focus-visible:shadow-none text-gray-200"
                        fdprocessedid="nnyzv"
                      />
                    </div>
                    <div class="mb-4 relative">
                      <span class="absolute top-1/2 -translate-y-1/2 left-6">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.9998 0.399994H1.9998C1.1498 0.399994 0.424805 1.09999 0.424805 1.97499V10.075C0.424805 10.925 1.1248 11.65 1.9998 11.65H13.9998C14.8498 11.65 15.5748 10.95 15.5748 10.075V1.94999C15.5748 1.09999 14.8498 0.399994 13.9998 0.399994ZM13.9998 1.52499C14.0248 1.52499 14.0498 1.52499 14.0748 1.52499L7.9998 5.42499L1.9248 1.52499C1.9498 1.52499 1.9748 1.52499 1.9998 1.52499H13.9998ZM13.9998 10.475H1.9998C1.7498 10.475 1.5498 10.275 1.5498 10.025V2.62499L7.3998 6.37499C7.5748 6.49999 7.7748 6.54999 7.9748 6.54999C8.1748 6.54999 8.3748 6.49999 8.5498 6.37499L14.3998 2.62499V10.05C14.4498 10.3 14.2498 10.475 13.9998 10.475Z"
                            fill="#918EA0"></path>
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder="Amount*"
                        class="w-full border border-white/[0.12] bg-transparent rounded-lg focus:border-purple pl-14 pr-4 py-3.5 font-medium outline-none focus-visible:shadow-none text-gray-200"
                        fdprocessedid="y6prfd"
                      />
                    </div>
                    <div class="mb-5 relative">
                      <span class="absolute top-1/2 -translate-y-1/2 left-6">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_368_6544)">
                            <path
                              d="M14.0752 1.92501C13.1252 0.975012 11.8502 0.450012 10.5002 0.450012C9.1502 0.450012 7.8502 0.975012 6.9002 1.92501C5.6252 3.20001 5.1252 5.00001 5.5752 6.75001L0.725195 11.575C0.550195 11.75 0.450195 12 0.450195 12.275V14.6C0.450195 15.125 0.875195 15.575 1.4252 15.575H3.7502C4.0002 15.575 4.2502 15.475 4.4502 15.3L5.0252 14.725C5.2252 14.525 5.3502 14.225 5.3002 13.925V13.875L5.6002 13.85C6.0752 13.8 6.4252 13.45 6.4752 12.975L6.5002 12.675H6.5502C6.8252 12.7 7.1002 12.625 7.3252 12.425C7.5252 12.25 7.6502 11.975 7.6502 11.7V11.5H7.8252C8.0752 11.5 8.3252 11.4 8.5002 11.225L9.3252 10.425C11.0502 10.85 12.8502 10.375 14.1002 9.12501C16.0502 7.12501 16.0502 3.90001 14.0752 1.92501ZM13.2752 8.30001C12.2502 9.32501 10.7252 9.70001 9.3002 9.22501C9.1002 9.15001 8.8752 9.20001 8.7252 9.35001L7.7252 10.35H7.0502C6.7502 10.35 6.4752 10.6 6.4752 10.925V11.525L6.0252 11.475C5.8752 11.45 5.7252 11.5 5.6002 11.6C5.4752 11.7 5.4002 11.825 5.4002 11.975L5.3252 12.725L4.5752 12.8C4.4252 12.825 4.2752 12.9 4.2002 13C4.1002 13.125 4.0502 13.275 4.0752 13.425L4.1502 13.975L3.6752 14.45H1.5752V12.35L6.6002 7.32501C6.7502 7.17501 6.8002 6.95001 6.7252 6.75001C6.2752 5.32501 6.6252 3.80001 7.6752 2.75001C8.4252 2.00001 9.4002 1.60001 10.4752 1.60001C11.5252 1.60001 12.5252 2.00001 13.2752 2.75001C14.8252 4.25001 14.8252 6.75001 13.2752 8.30001Z"
                              fill="#918EA0"></path>
                            <path
                              d="M11.3498 2.875C10.8748 2.875 10.4248 3.05 10.0748 3.4C9.3748 4.1 9.3748 5.225 10.0748 5.925C10.4248 6.275 10.8748 6.45 11.3498 6.45C11.8248 6.45 12.2748 6.275 12.6248 5.925C12.9748 5.575 13.1498 5.125 13.1498 4.65C13.1498 4.175 12.9748 3.725 12.6248 3.375C12.2748 3.05 11.8248 2.875 11.3498 2.875ZM11.8248 5.125C11.5748 5.375 11.1248 5.375 10.8748 5.125C10.6248 4.875 10.6248 4.45 10.8748 4.175C10.9998 4.05 11.1748 3.975 11.3498 3.975C11.5248 3.975 11.6998 4.05 11.8248 4.175C11.9498 4.3 12.0248 4.475 12.0248 4.65C12.0248 4.825 11.9498 5 11.8248 5.125Z"
                              fill="#918EA0"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_368_6544">
                              <rect width="16" height="16" fill="white"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder="Revenue royalty percentage*"
                        class="w-full border border-white/[0.12] bg-transparent rounded-lg focus:border-purple pl-14 pr-4 py-3.5 font-medium outline-none focus-visible:shadow-none text-gray-200"
                        fdprocessedid="ghc7l5"
                      />
                    </div>
                    <input
                      id="ipfs_file"
                      type="file"
                      style={{ display: 'none' }}
                      onChange={() => {
                        setAllfile(ipfs_file.files);
                      }}
                    />
                    <div class="mb-2 relative">
                      <span class="absolute top-1/2 -translate-y-1/2 left-6">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.9998 0.399994H1.9998C1.1498 0.399994 0.424805 1.09999 0.424805 1.97499V10.075C0.424805 10.925 1.1248 11.65 1.9998 11.65H13.9998C14.8498 11.65 15.5748 10.95 15.5748 10.075V1.94999C15.5748 1.09999 14.8498 0.399994 13.9998 0.399994ZM13.9998 1.52499C14.0248 1.52499 14.0498 1.52499 14.0748 1.52499L7.9998 5.42499L1.9248 1.52499C1.9498 1.52499 1.9748 1.52499 1.9998 1.52499H13.9998ZM13.9998 10.475H1.9998C1.7498 10.475 1.5498 10.275 1.5498 10.025V2.62499L7.3998 6.37499C7.5748 6.49999 7.7748 6.54999 7.9748 6.54999C8.1748 6.54999 8.3748 6.49999 8.5498 6.37499L14.3998 2.62499V10.05C14.4498 10.3 14.2498 10.475 13.9998 10.475Z"
                            fill="#918EA0"></path>
                        </svg>
                      </span>
                      <button
                        type="button"
                        onClick={uploadFile}
                        class="w-full border border-white/[0.12] bg-transparent rounded-lg focus:border-purple pl-14 pr-4 py-3.5 font-medium outline-none focus-visible:shadow-none text-gray-400"
                        fdprocessedid="y6prfd">
                        Upload logo*
                      </button>
                    </div>
                    {allfile.length > 0 && (
                      <div className="text-sm text-gray-400 mb-4 font-semibold">{allfile[0].name} files choosen</div>
                    )}
                    <div className='relative mb-2'>
                      <Checkbox onChange={(e) => setIsTransferrable(e.target.checked)} defaultChecked />
                      <span className='text-gray-400'>is the token transferrable*</span>
                    </div>
                    <button
                      onClick={e => mint(e)}
                      class={`${style.heroButtonGradient} flex justify-center w-full rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80`}
                      fdprocessedid="84ofed">
                      Mint
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
