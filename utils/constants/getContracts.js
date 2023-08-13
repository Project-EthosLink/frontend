import { ethers } from 'ethers';
import { Token_ABI as ABI, Token_Address as Address } from './Addresses_ABI';
export const getContract = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(Address, ABI, signer);
    return contract;
  } catch (err) {
    console.log(err);
  }
};
