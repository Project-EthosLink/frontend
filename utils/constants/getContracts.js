import { ethers } from 'ethers';
import { Token_Address, Token_ABI } from './Addresses_ABI';

const getContract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send('eth_requestAccounts', []);
  const signer = provider.getSigner();
  const tokenContract = new ethers.Contract(Token_Address, Token_ABI, signer);
  return tokenContract;
};

export { getContract };
