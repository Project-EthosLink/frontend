import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import "@rainbow-me/rainbowkit/styles.css";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai, mainnet, optimism, polygon, zora, zoraTestnet, baseGoerli } from 'wagmi/chains'
import { publicProvider } from "wagmi/providers/public";
import {
  RainbowKitProvider,
  getDefaultWallets,
  midnightTheme
} from "@rainbow-me/rainbowkit";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { metaMaskWallet, injectedWallet, rainbowWallet, coinbaseWallet } from "@rainbow-me/rainbowkit/wallets";

import { ArcanaConnector } from "@arcana/auth-wagmi";
import Layout from '../components/Layout';

import '@fortawesome/fontawesome-svg-core/styles.css';
import initFontAwesome from '../utils/initFontAwesome';
import '../styles/globals.css';

initFontAwesome();



const ArcanaRainbowConnector = ({ chains }) => {
  return {
    id: "arcana-auth",
    name: "Arcana Wallet",
    iconUrl: "https://media.licdn.com/dms/image/C4D0BAQFnmnmr4ZrjUQ/company-logo_200_200/0/1663061019048?e=1684368000&v=beta&t=Km-ii4HJitQr9GRB0LF4IVmWkWX52Z1QGLSZ6PiRkC0",
    iconBackground: "#101010",
    createConnector: () => {
      const connector = new ArcanaConnector({
        chains,
        options: {
          // appId parameter refers to App Address value in the Dashboard
          appId: "51d1846eb0f2283b7bc7cb36f2032d0c1c6c8f9e",
        },
      });
      return {
        connector,
      };
    },
  };
};


const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, polygonMumbai, zora, zoraTestnet, baseGoerli],
  [
    publicProvider()
  ]
);

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const { wallets } = getDefaultWallets({
  appName: 'Tokentribe',
  projectId,
  chains,
});

const connectors = (chains) =>
  connectorsForWallets([
    ...wallets,
    {
      groupName: "Tokentribe",
      wallets: [ArcanaRainbowConnector({ chains })]
    },
  ]);

const wagmiClient = createConfig({
  autoConnect: true,
  connectors: connectors(chains),
  publicClient
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={midnightTheme()}>
        <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
