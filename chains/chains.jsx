
export const gnosisChain = {
  id: '0x64',
  token: 'xDai',
  shortName: 'gno',
  label: 'Gnosis Chain',
  rpcUrl: 'https://rpc.gnosischain.com',
  blockExplorerUrl: 'https://gnosisscan.io',
  color: '#3e6957',
  transactionServiceUrl: 'https://safe-transaction-gnosis-chain.safe.global',
  isStripePaymentsEnabled: false
}

export const goerliChain = {
  id: '0x5',
  token: 'gETH',
  label: 'Görli',
  shortName: 'gor',
  rpcUrl: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  blockExplorerUrl: 'https://goerli.etherscan.io',
  color: '#fbc02d',
  transactionServiceUrl: 'https://safe-transaction-goerli.safe.global',
  isStripePaymentsEnabled: false
}

export const mainnetChain = {
  id: '0x1',
  token: 'ETH',
  label: 'Ethereum',
  shortName: 'eth',
  rpcUrl: 'https://cloudflare-eth.com',
  blockExplorerUrl: 'https://etherscan.io',
  color: '#DDDDDD',
  transactionServiceUrl: 'https://safe-transaction-mainnet.safe.global',
  isStripePaymentsEnabled: false
}

export const polygonChain = {
  id: '0x89',
  token: 'matic',
  shortName: 'matic',
  label: 'Polygon',
  rpcUrl: 'https://polygon-rpc.com',
  blockExplorerUrl: 'https://polygonscan.com',
  color: '#8248E5',
  transactionServiceUrl: 'https://safe-transaction-polygon.safe.global',
  isStripePaymentsEnabled: false
}

export const mumbaiChain = {
  id: '0x13881',
  token: 'matic',
  shortName: 'matic',
  label: 'Mumbai',
  rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
  blockExplorerUrl: 'https://mumbai.polygonscan.com',
  color: '#8248E5',
  isStripePaymentsEnabled: true,
  faucetUrl: 'https://mumbaifaucet.com/',
  transactionServiceUrl: 'https://safe-transaction-polygon.safe.global',
}

export const baseChain = {
  id: '0x14a33',
  token: 'ETH',
  shortName: 'ETH',
  label: 'Base Goerli',
  rpcUrl: 'https://goerli.base.org/',
  blockExplorerUrl: 'https://goerli.basescan.org/',
  color: '#8248E5',
  isStripePaymentsEnabled: true,
  faucetUrl: 'https://mumbaifaucet.com/',
  transactionServiceUrl: 'https://safe-transaction-mainnet.safe.global',
}

const chains = [gnosisChain, goerliChain, mainnetChain, mumbaiChain, polygonChain,baseChain]

export const initialChain = baseChain

export default chains