import axios, { RawAxiosRequestConfig } from 'axios'
import { utils } from 'ethers'

import getChain from '/utils/getChains'

const getSafeInfo = async (
  safeAddress,
  connectedChainId,
  options
) => {
  const chain = getChain(connectedChainId)

  const address = utils.getAddress(safeAddress)

  // Mumbai has no transaction service because it is not part of our official UI https://app.safe.global/
  if (!chain?.transactionServiceUrl) {
    throw new Error(`No transaction service for ${chain?.label} chain`)
  }

  const url = `${chain?.transactionServiceUrl}/api/v1/safes/${address}/`

  const { data: safeInfo } = await axios.get(url, options)

  return safeInfo
}

export default getSafeInfo