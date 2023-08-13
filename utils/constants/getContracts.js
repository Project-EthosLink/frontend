import ethers from 'ethers';
import { Token_Address, Token_ABI } from './Addresses_ABI';

const getContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const tokenContract = new ethers.Contract(Token_Address, Token_ABI, signer);
  return tokenContract;
};

export default getContract;
