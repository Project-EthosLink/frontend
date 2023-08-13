export const Token_Address = '0x5C0f8b8151823107F498A8bC036292249DA413f3';
export const Token_ABI = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'account', type: 'address' },
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
    ],
    name: 'ApprovalForAll',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'creator', type: 'address' },
      { indexed: false, internalType: 'string', name: 'URI', type: 'string' }
    ],
    name: 'CratorRigistered',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: false, internalType: 'address', name: 'buyer', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'price', type: 'uint256' }
    ],
    name: 'SocialTokenBought',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'price', type: 'uint256' }
    ],
    name: 'SocialTokenLaunched',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'price', type: 'uint256' }
    ],
    name: 'SocialTokenListed',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'resaleRoyaltyPercentage', type: 'uint256' },
      { indexed: false, internalType: 'bool', name: 'transferrable', type: 'bool' },
      { indexed: false, internalType: 'string', name: 'URI', type: 'string' }
    ],
    name: 'SocialTokenMinted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'SocialTokenUnlisted',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
      { indexed: false, internalType: 'uint256[]', name: 'values', type: 'uint256[]' }
    ],
    name: 'TransferBatch',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'operator', type: 'address' },
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
    ],
    name: 'TransferSingle',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'string', name: 'value', type: 'string' },
      { indexed: true, internalType: 'uint256', name: 'id', type: 'uint256' }
    ],
    name: 'URI',
    type: 'event'
  },
  {
    inputs: [],
    name: 'EthosLink',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'uint256', name: 'id', type: 'uint256' }
    ],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address[]', name: 'accounts', type: 'address[]' },
      { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }
    ],
    name: 'balanceOfBatch',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_id', type: 'uint256' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
      { internalType: 'address', name: '_seller', type: 'address' }
    ],
    name: 'buySocialToken',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'creators',
    outputs: [
      { internalType: 'uint256', name: 'tokenID', type: 'uint256' },
      { internalType: 'address', name: 'creator', type: 'address' },
      { internalType: 'string', name: '_URI', type: 'string' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getCurrentTokenId',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  { inputs: [], name: 'getEthosLink', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'address', name: 'operator', type: 'address' }
    ],
    name: 'isApprovedForAll',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_id', type: 'uint256' },
      { internalType: 'uint256', name: '_price', type: 'uint256' }
    ],
    name: 'launchSocialToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
      { internalType: 'uint256', name: '_id', type: 'uint256' },
      { internalType: 'uint256', name: '_price', type: 'uint256' }
    ],
    name: 'listTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'string', name: 'URI', type: 'string' },
      { internalType: 'uint256', name: 'resaleRoyaltyPercentage', type: 'uint256' },
      { internalType: 'bool', name: '_transferrable', type: 'bool' }
    ],
    name: 'mintSocialToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256[]', name: '', type: 'uint256[]' },
      { internalType: 'uint256[]', name: '', type: 'uint256[]' },
      { internalType: 'bytes', name: '', type: 'bytes' }
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'bytes', name: '', type: 'bytes' }
    ],
    name: 'onERC1155Received',
    outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'string', name: 'URI', type: 'string' }],
    name: 'registerCreator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' },
      { internalType: 'uint256[]', name: 'amounts', type: 'uint256[]' },
      { internalType: 'bytes', name: 'data', type: 'bytes' }
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'id', type: 'uint256' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'bytes', name: 'data', type: 'bytes' }
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'operator', type: 'address' },
      { internalType: 'bool', name: 'approved', type: 'bool' }
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'address', name: '', type: 'address' }
    ],
    name: 'socialTokenHolders',
    outputs: [
      { internalType: 'uint256', name: 'tokenID', type: 'uint256' },
      { internalType: 'address', name: 'holder', type: 'address' },
      { internalType: 'uint256', name: 'holdingAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'listedAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'priceByHolder', type: 'uint256' },
      { internalType: 'uint256', name: 'priceAtHolderBought', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'socialTokens',
    outputs: [
      { internalType: 'uint256', name: 'tokenID', type: 'uint256' },
      { internalType: 'address', name: 'creator', type: 'address' },
      { internalType: 'string', name: 'URI', type: 'string' },
      { internalType: 'bool', name: 'isLaunched', type: 'bool' },
      { internalType: 'uint256', name: 'launchingPrice', type: 'uint256' },
      { internalType: 'uint256', name: 'totalAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'currentlyListedAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'resaleRoyaltyPercentage', type: 'uint256' },
      { internalType: 'bool', name: 'transferrable', type: 'bool' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'uri',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
      { internalType: 'uint256', name: '_id', type: 'uint256' }
    ],
    name: 'withdrawTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
];