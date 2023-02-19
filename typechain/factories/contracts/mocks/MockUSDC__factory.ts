/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../../common'
import type { MockUSDC, MockUSDCInterface } from '../../../contracts/mocks/MockUSDC'

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      }
    ],
    name: 'Approval',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256'
      }
    ],
    name: 'Transfer',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address'
      }
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address'
      }
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256'
      }
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256'
      }
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '_ammount',
        type: 'uint256'
      }
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5060408051808201825260088152672aa9a21021b7b4b760c11b6020808301918252835180850190945260048452635553444360e01b90840152815191929161005b91600391610077565b50805161006f906004906020840190610077565b50505061014b565b82805461008390610110565b90600052602060002090601f0160209004810192826100a557600085556100eb565b82601f106100be57805160ff19168380011785556100eb565b828001600101855582156100eb579182015b828111156100eb5782518255916020019190600101906100d0565b506100f79291506100fb565b5090565b5b808211156100f757600081556001016100fc565b600181811c9082168061012457607f821691505b6020821081141561014557634e487b7160e01b600052602260045260246000fd5b50919050565b6109948061015a6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806340c10f191161007157806340c10f191461014157806370a082311461015657806395d89b411461017f578063a457c2d714610187578063a9059cbb1461019a578063dd62ed3e146101ad57600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f578063395093511461012e575b600080fd5b6100c16101c0565b6040516100ce91906107d1565b60405180910390f35b6100ea6100e5366004610842565b610252565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a36600461086c565b61026a565b604051601281526020016100ce565b6100ea61013c366004610842565b61028e565b61015461014f366004610842565b6102b0565b005b6100fe6101643660046108a8565b6001600160a01b031660009081526020819052604090205490565b6100c16102be565b6100ea610195366004610842565b6102cd565b6100ea6101a8366004610842565b61034d565b6100fe6101bb3660046108ca565b61035b565b6060600380546101cf906108fd565b80601f01602080910402602001604051908101604052809291908181526020018280546101fb906108fd565b80156102485780601f1061021d57610100808354040283529160200191610248565b820191906000526020600020905b81548152906001019060200180831161022b57829003601f168201915b5050505050905090565b600033610260818585610386565b5060019392505050565b6000336102788582856104aa565b610283858585610524565b506001949350505050565b6000336102608185856102a1838361035b565b6102ab9190610938565b610386565b6102ba82826106f2565b5050565b6060600480546101cf906108fd565b600033816102db828661035b565b9050838110156103405760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102838286868403610386565b600033610260818585610524565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103e85760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610337565b6001600160a01b0382166104495760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610337565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104b6848461035b565b9050600019811461051e57818110156105115760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610337565b61051e8484848403610386565b50505050565b6001600160a01b0383166105885760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610337565b6001600160a01b0382166105ea5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610337565b6001600160a01b038316600090815260208190526040902054818110156106625760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610337565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610699908490610938565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106e591815260200190565b60405180910390a361051e565b6001600160a01b0382166107485760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610337565b806002600082825461075a9190610938565b90915550506001600160a01b03821660009081526020819052604081208054839290610787908490610938565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600060208083528351808285015260005b818110156107fe578581018301518582016040015282016107e2565b81811115610810576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461083d57600080fd5b919050565b6000806040838503121561085557600080fd5b61085e83610826565b946020939093013593505050565b60008060006060848603121561088157600080fd5b61088a84610826565b925061089860208501610826565b9150604084013590509250925092565b6000602082840312156108ba57600080fd5b6108c382610826565b9392505050565b600080604083850312156108dd57600080fd5b6108e683610826565b91506108f460208401610826565b90509250929050565b600181811c9082168061091157607f821691505b6020821081141561093257634e487b7160e01b600052602260045260246000fd5b50919050565b6000821982111561095957634e487b7160e01b600052601160045260246000fd5b50019056fea264697066735822122079c70115609abb1e13f50eae1cb032e64187eda0ca1136e3a5437f6bcc56e82164736f6c63430008090033'

type MockUSDCConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: MockUSDCConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class MockUSDC__factory extends ContractFactory {
  constructor(...args: MockUSDCConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<MockUSDC> {
    return super.deploy(overrides || {}) as Promise<MockUSDC>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): MockUSDC {
    return super.attach(address) as MockUSDC
  }
  override connect(signer: Signer): MockUSDC__factory {
    return super.connect(signer) as MockUSDC__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): MockUSDCInterface {
    return new utils.Interface(_abi) as MockUSDCInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): MockUSDC {
    return new Contract(address, _abi, signerOrProvider) as MockUSDC
  }
}
