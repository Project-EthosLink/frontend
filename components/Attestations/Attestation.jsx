import style from '../Style.module.css';
import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from '@ethereum-attestation-service/eas-sdk';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import { useProvider } from 'wagmi';

export default function Attestation() {
  const [attestation, setAttestation] = useState('');
  const uid = '0xff08bbf3d3e6e0992fc70ab9b9370416be59e87897c3d42b20549901d2cccc3e';
  useEffect(() => {}, []);
  const getAttestation = async () => {
    const EASContractAddress = '0xC2679fBD37d54388Ce493F1DB75320D236e1815e'; // Sepolia v0.26
    const eas = new EAS(EASContractAddress);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    console.log(provider);
    eas.connect(provider);
    const attest = await eas.getAttestation(uid);
    console.log(attest);
  };
  return (
    <div className=" mt-52 text-white p-24">
      <h1>Attestation</h1>
      <button
        onClick={getAttestation}
        className={`relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 hover:shadow-none px-4 ${style.buttonBorderGradient} ${style.shadowButton}`}>
        click here
      </button>
      {attestation}
    </div>
  );
}
