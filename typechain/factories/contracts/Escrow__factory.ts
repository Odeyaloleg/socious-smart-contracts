/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { PromiseOrValue } from '../../common'
import type { Escrow, EscrowInterface } from '../../contracts/Escrow'

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
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'organization',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'contributer',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'jobId',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address'
      }
    ],
    name: 'EscrowAction',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address'
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'escrowId',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'destination',
        type: 'address'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      }
    ],
    name: 'TransferAction',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_organization',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_contributor',
        type: 'address'
      },
      {
        internalType: 'string',
        name: '_jobId',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: '_fee',
        type: 'uint256'
      },
      {
        internalType: 'enum Escrow.EscrowStatus',
        name: '_status',
        type: 'uint8'
      },
      {
        internalType: 'contract IERC20',
        name: '_token',
        type: 'address'
      }
    ],
    name: 'addEscrowData',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '_token',
        type: 'address'
      }
    ],
    name: 'addToken',
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
        internalType: 'contract IERC20',
        name: '_token',
        type: 'address'
      }
    ],
    name: 'collectIncomeValue',
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
        internalType: 'uint256',
        name: '_escrowId',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: '_refund',
        type: 'bool'
      },
      {
        internalType: 'bool',
        name: '_verifiedContributer',
        type: 'bool'
      }
    ],
    name: 'escrowDecision',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'escrowHistory',
    outputs: [
      {
        internalType: 'address',
        name: 'organization',
        type: 'address'
      },
      {
        internalType: 'address',
        name: 'contributor',
        type: 'address'
      },
      {
        internalType: 'string',
        name: 'jobId',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256'
      },
      {
        internalType: 'enum Escrow.EscrowStatus',
        name: 'status',
        type: 'uint8'
      },
      {
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getDecisionRetentionFee',
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
        internalType: 'uint256',
        name: '_escrowId',
        type: 'uint256'
      }
    ],
    name: 'getEscrow',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'organization',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'contributor',
            type: 'address'
          },
          {
            internalType: 'string',
            name: 'jobId',
            type: 'string'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'fee',
            type: 'uint256'
          },
          {
            internalType: 'enum Escrow.EscrowStatus',
            name: 'status',
            type: 'uint8'
          },
          {
            internalType: 'contract IERC20',
            name: 'token',
            type: 'address'
          }
        ],
        internalType: 'struct Escrow.EscrowData',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_organization',
        type: 'address'
      },
      {
        internalType: 'address',
        name: '_contributor',
        type: 'address'
      },
      {
        internalType: 'string',
        name: '_jobId',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      }
    ],
    name: 'getEscrowId',
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
    name: 'getImpactContFee',
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
    name: 'getImpactOrgFee',
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
    name: 'getNoImpactContFee',
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
    name: 'getNoImpactOrgFee',
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
    name: 'getTokens',
    outputs: [
      {
        internalType: 'contract IERC20[]',
        name: '',
        type: 'address[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_contributor',
        type: 'address'
      },
      {
        internalType: 'string',
        name: '_jobId',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: '_verifiedOrg',
        type: 'bool'
      },
      {
        internalType: 'contract IERC20',
        name: '_token',
        type: 'address'
      }
    ],
    name: 'newEscrow',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newFee',
        type: 'uint256'
      }
    ],
    name: 'setDecisionRetentionFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newFee',
        type: 'uint256'
      }
    ],
    name: 'setImpactContFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newFee',
        type: 'uint256'
      }
    ],
    name: 'setImpactOrgFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newFee',
        type: 'uint256'
      }
    ],
    name: 'setNoImpactContFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_newFee',
        type: 'uint256'
      }
    ],
    name: 'setNoImpactOrgFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'transactionsHistory',
    outputs: [
      {
        internalType: 'uint256',
        name: 'escrowId',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'fee',
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
        name: 'destination',
        type: 'address'
      },
      {
        internalType: 'contract IERC20',
        name: '_token',
        type: 'address'
      }
    ],
    name: 'transferAssets',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address'
      }
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'validTokens',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'version',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_escrowId',
        type: 'uint256'
      },
      {
        internalType: 'bool',
        name: '_verifiedContributer',
        type: 'bool'
      }
    ],
    name: 'withrawn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
]

const _bytecode =
  '0x60c060405260056080819052640302e312e360dc1b60a0908152620000289160029190620000d1565b50600a600455600580556003600655600260075560016008553480156200004e57600080fd5b506200005a3362000092565b600180546001600160a01b03191633908117909155604051819060009060008051602062002b1f833981519152908290a350620001b4565b600080546001600160a01b038381166001600160a01b03198316811784556040519190921692839160008051602062002b1f8339815191529190a35050565b828054620000df9062000177565b90600052602060002090601f0160209004810192826200010357600085556200014e565b82601f106200011e57805160ff19168380011785556200014e565b828001600101855582156200014e579182015b828111156200014e57825182559160200191906001019062000131565b506200015c92915062000160565b5090565b5b808211156200015c576000815560010162000161565b600181811c908216806200018c57607f821691505b60208210811415620001ae57634e487b7160e01b600052602260045260246000fd5b50919050565b61295b80620001c46000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636d6ac214116100f9578063be3255a111610097578063e9d3d16a11610071578063e9d3d16a1461039e578063ee809b02146103b1578063f2d46886146103b9578063f2fde38b146103cc57600080fd5b8063be3255a114610360578063d48bfca714610373578063e0b1572b1461039657600080fd5b80637d19e596116100d35780637d19e596146102f35780637f7f9c67146103135780638da5cb5b14610326578063aa6ca8081461034b57600080fd5b80636d6ac214146102c5578063715018a6146102d85780637a23b3d2146102e057600080fd5b8063331e6f54116101665780634c62dac4116101405780634c62dac41461028257806354fd4d501461028a578063639f1d8c1461029f57806364e7b7ad146102b257600080fd5b8063331e6f541461025457806336e872df14610267578063373d9ada1461026f57600080fd5b806304a5d38b146101ae57806310a3c7c8146101c35780631482b51b146101da5780631fbfb2d1146101ed57806321996e591461020057806332592ed014610226575b600080fd5b6101c16101bc3660046121ab565b6103df565b005b6008545b6040519081526020015b60405180910390f35b6101c16101e83660046121db565b6108d2565b6101c16101fb3660046121db565b6108ee565b61021361020e3660046121db565b61090a565b6040516101d19796959493929190612284565b6102396102343660046122f3565b6109fd565b604080519384526020840192909252908201526060016101d1565b6101c16102623660046121db565b610a3f565b6006546101c7565b6101c761027d36600461231f565b610a5b565b6007546101c7565b610292610b8a565b6040516101d19190612343565b6101c76102ad3660046123f9565b610c18565b6101c16102c036600461249a565b610d6b565b6101c76102d33660046124c8565b610ebc565b6101c1611054565b6101c16102ee366004612532565b611068565b6103066103013660046121db565b6117be565b6040516101d19190612574565b6101c16103213660046121db565b61191d565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016101d1565b610353611939565b6040516101d191906125ef565b6101c161036e3660046121db565b6119a3565b61038661038136600461231f565b6119bf565b60405190151581526020016101d1565b6004546101c7565b6103336103ac3660046121db565b611a33565b6005546101c7565b6101c76103c736600461263c565b611a5d565b6101c16103da36600461231f565b611ed4565b6000600a6103ee6001856126d3565b815481106103fe576103fe6126ea565b60009182526020918290206040805160e081018252600690930290910180546001600160a01b039081168452600182015416938301939093526002830180549293929184019161044d90612700565b80601f016020809104026020016040519081016040528092919081815260200182805461047990612700565b80156104c65780601f1061049b576101008083540402835291602001916104c6565b820191906000526020600020905b8154815290600101906020018083116104a957829003601f168201915b50505091835250506003820154602082015260048201546040820152600582015460609091019060ff1660028111156105015761050161224c565b60028111156105125761051261224c565b8152600591909101546001600160a01b03610100909104811660209092019190915281519192501633146105a45760405162461bcd60e51b815260206004820152602e60248201527f4f6e6c7920746865206f7267616e697a6174696f6e20616c6c6f7720746f207760448201526d6974687261776e20657363726f7760901b60648201526084015b60405180910390fd5b60008160a0015160028111156105bc576105bc61224c565b146106185760405162461bcd60e51b815260206004820152602660248201527f457363726f7720737461747573206973206e6f742076616c696420746f2077696044820152653a343930bbb760d11b606482015260840161059b565b6000610628826060015184611f4d565b9050600081836060015161063c91906126d3565b60c08401516040516370a0823160e01b815230600482015291925082916001600160a01b03909116906370a082319060240160206040518083038186803b15801561068657600080fd5b505afa15801561069a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106be919061273b565b10156106dc5760405162461bcd60e51b815260040161059b90612754565b60c0830151602084015160405163a9059cbb60e01b81526001600160a01b03918216600482015260248101849052600092919091169063a9059cbb90604401602060405180830381600087803b15801561073557600080fd5b505af1158015610749573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076d9190612789565b9050806107bc5760405162461bcd60e51b815260206004820152601e60248201527f5472616e7366657220746f20636f6e7472696275746f72206661696c65640000604482015260640161059b565b6001600a6107ca82896126d3565b815481106107da576107da6126ea565b60009182526020909120600560069092020101805460ff191660018360028111156108075761080761224c565b0217905550602080850180516001600160a01b03166000908152600b8352604080822081516060810183528b81528086018881528184018a81528354600181810186559487529790952091516003909702909101958655519085015590516002909301929092555190517f5d650463d666c27958a84754ae0768185640bfafcfde5da7dbc8e71c4599c918916108c291899190879087909384526001600160a01b039290921660208401526040830152606082015260800190565b60405180910390a1505050505050565b6108da611f74565b6006548114156108e957600080fd5b600655565b6108f6611f74565b60085481141561090557600080fd5b600855565b600a818154811061091a57600080fd5b60009182526020909120600690910201805460018201546002830180546001600160a01b03938416955092909116929161095390612700565b80601f016020809104026020016040519081016040528092919081815260200182805461097f90612700565b80156109cc5780601f106109a1576101008083540402835291602001916109cc565b820191906000526020600020905b8154815290600101906020018083116109af57829003601f168201915b50505050600383015460048401546005909401549293909290915060ff81169061010090046001600160a01b031687565b600b6020528160005260406000208181548110610a1957600080fd5b600091825260209091206003909102018054600182015460029092015490935090915083565b610a47611f74565b600754811415610a5657600080fd5b600755565b6000610a65611f74565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a082319060240160206040518083038186803b158015610aa757600080fd5b505afa158015610abb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610adf919061273b565b90506000805b600a54811015610b77576000600a8281548110610b0457610b046126ea565b600091825260209091206005600690920201015460ff166002811115610b2c57610b2c61224c565b1415610b6557600a8181548110610b4557610b456126ea565b90600052602060002090600602016003015482610b6291906127a6565b91505b80610b6f816127be565b915050610ae5565b50610b8281836126d3565b949350505050565b60028054610b9790612700565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc390612700565b8015610c105780601f10610be557610100808354040283529160200191610c10565b820191906000526020600020905b815481529060010190602001808311610bf357829003601f168201915b505050505081565b6000610c22611f74565b600a6040518060e001604052808a6001600160a01b03168152602001896001600160a01b03168152602001888152602001878152602001868152602001856002811115610c7157610c7161224c565b81526001600160a01b03808616602092830152835460018181018655600095865294839020845160069092020180549183166001600160a01b0319928316178155848401519581018054969093169590911694909417905560408201518051929392610ce392600285019201906120a4565b50606082015160038201556080820151600482015560a082015160058201805460ff19166001836002811115610d1b57610d1b61224c565b021790555060c09190910151600590910180546001600160a01b0390921661010002610100600160a81b0319909216919091179055600a54610d5f906001906126d3565b98975050505050505050565b610d73611f74565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a082319060240160206040518083038186803b158015610db557600080fd5b505afa158015610dc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ded919061273b565b905060405163a9059cbb60e01b81526001600160a01b038481166004830152602482018390526000919084169063a9059cbb90604401602060405180830381600087803b158015610e3d57600080fd5b505af1158015610e51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e759190612789565b905080610eb65760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b604482015260640161059b565b50505050565b6000805b600a5481101561101857856001600160a01b0316600a8281548110610ee757610ee76126ea565b60009182526020909120600690910201546001600160a01b0316148015610f455750846001600160a01b0316600a8281548110610f2657610f266126ea565b60009182526020909120600160069092020101546001600160a01b0316145b8015610fbf575083604051602001610f5d91906127d9565b60405160208183030381529060405280519060200120600a8281548110610f8657610f866126ea565b9060005260206000209060060201600201604051602001610fa791906127f5565b60405160208183030381529060405280519060200120145b8015610fee575082600a8281548110610fda57610fda6126ea565b906000526020600020906006020160030154145b1561100657610ffe8160016127a6565b915050610b82565b80611010816127be565b915050610ec0565b5060405162461bcd60e51b815260206004820152601060248201526f115cd8dc9bddc81b9bdd08199bdd5b9960821b604482015260640161059b565b61105c611f74565b6110666000611fce565b565b611070611f74565b6000600a61107f6001866126d3565b8154811061108f5761108f6126ea565b60009182526020918290206040805160e081018252600690930290910180546001600160a01b03908116845260018201541693830193909352600283018054929392918401916110de90612700565b80601f016020809104026020016040519081016040528092919081815260200182805461110a90612700565b80156111575780601f1061112c57610100808354040283529160200191611157565b820191906000526020600020905b81548152906001019060200180831161113a57829003601f168201915b50505091835250506003820154602082015260048201546040820152600582015460609091019060ff1660028111156111925761119261224c565b60028111156111a3576111a361224c565b81526005919091015461010090046001600160a01b0316602090910152905060008160a0015160028111156111da576111da61224c565b146112375760405162461bcd60e51b815260206004820152602760248201527f457363726f7720737461747573206973206e6f742076616c696420666f72206460448201526632b1b4b9b4b7b760c91b606482015260840161059b565b82156115035760008160800151826060015161125391906127a6565b905060006008546064836112679190612891565b61127191906128b3565b9050600061127f82846126d3565b60c08501516040516370a0823160e01b815230600482015291925082916001600160a01b03909116906370a082319060240160206040518083038186803b1580156112c957600080fd5b505afa1580156112dd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611301919061273b565b101561131f5760405162461bcd60e51b815260040161059b90612754565b60c0840151845160405163a9059cbb60e01b81526001600160a01b03918216600482015260248101849052600092919091169063a9059cbb90604401602060405180830381600087803b15801561137557600080fd5b505af1158015611389573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ad9190612789565b9050806113fc5760405162461bcd60e51b815260206004820152601d60248201527f526566756e6420746f206f7267616e697a6174696f6e206661696c6564000000604482015260640161059b565b84516001600160a01b03166000908152600b6020908152604080832081516060810183528c8152808401878152928101888152825460018181018555938752949095209051600390940201928355905182820155915160029182015590600a90611466908b6126d3565b81548110611476576114766126ea565b60009182526020909120600560069092020101805460ff191660018360028111156114a3576114a361224c565b02179055508451604080518a81526001600160a01b0390921660208301528101849052606081018590527f5d650463d666c27958a84754ae0768185640bfafcfde5da7dbc8e71c4599c9189060800160405180910390a150505050610eb6565b6000611513826060015184611f4d565b9050600081836060015161152791906126d3565b60c08401516040516370a0823160e01b815230600482015291925082916001600160a01b03909116906370a082319060240160206040518083038186803b15801561157157600080fd5b505afa158015611585573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a9919061273b565b10156115c75760405162461bcd60e51b815260040161059b90612754565b60c0830151602084015160405163a9059cbb60e01b81526001600160a01b03918216600482015260248101849052600092919091169063a9059cbb90604401602060405180830381600087803b15801561162057600080fd5b505af1158015611634573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116589190612789565b9050806116a75760405162461bcd60e51b815260206004820152601e60248201527f5472616e7366657220746f20636f6e7472696275746f72206661696c65640000604482015260640161059b565b6020808501516001600160a01b03166000908152600b8252604080822081516060810183528b81528085018781529281018881528254600181810185559386529590942090516003909502019384559051838201559051600290920191909155600a611713828a6126d3565b81548110611723576117236126ea565b60009182526020909120600560069092020101805460ff191660018360028111156117505761175061224c565b02179055507f5d650463d666c27958a84754ae0768185640bfafcfde5da7dbc8e71c4599c91887856020015185856040516117ad94939291909384526001600160a01b039290921660208401526040830152606082015260800190565b60405180910390a150505050505050565b6117c6612128565b6000600a6117d56001856126d3565b815481106117e5576117e56126ea565b60009182526020918290206040805160e081018252600690930290910180546001600160a01b039081168452600182015416938301939093526002830180549293929184019161183490612700565b80601f016020809104026020016040519081016040528092919081815260200182805461186090612700565b80156118ad5780601f10611882576101008083540402835291602001916118ad565b820191906000526020600020905b81548152906001019060200180831161189057829003601f168201915b50505091835250506003820154602082015260048201546040820152600582015460609091019060ff1660028111156118e8576118e861224c565b60028111156118f9576118f961224c565b81526005919091015461010090046001600160a01b03166020909101529392505050565b611925611f74565b60055481141561193457600080fd5b600555565b6060611943611f74565b600380548060200260200160405190810160405280929190818152602001828054801561199957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161197b575b5050505050905090565b6119ab611f74565b6004548114156119ba57600080fd5b600455565b60006119c9611f74565b6119d28261201e565b156119df57506000919050565b5060038054600181810183556000929092527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b0384166001600160a01b0319909116179055919050565b60038181548110611a4357600080fd5b6000918252602090912001546001600160a01b0316905081565b6000611a688261201e565b611aa95760405162461bcd60e51b8152602060048201526012602482015271151bdad95b881a5cc81b9bdd081d985b1a5960721b604482015260640161059b565b6000611ab58585612088565b90506000611ac382876127a6565b6040516370a0823160e01b815233600482015290915081906001600160a01b038616906370a082319060240160206040518083038186803b158015611b0757600080fd5b505afa158015611b1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b3f919061273b565b1015611b805760405162461bcd60e51b815260206004820152601060248201526f4e6f7420656e6f7567682066756e647360801b604482015260640161059b565b604051636eb1769f60e11b815233600482015230602482015281906001600160a01b0386169063dd62ed3e9060440160206040518083038186803b158015611bc757600080fd5b505afa158015611bdb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bff919061273b565b1015611c445760405162461bcd60e51b81526020600482015260146024820152734e6f7420656e6f75676820616c6c6f77616e636560601b604482015260640161059b565b6040516323b872dd60e01b8152336004820152306024820152604481018290526000906001600160a01b038616906323b872dd90606401602060405180830381600087803b158015611c9557600080fd5b505af1158015611ca9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ccd9190612789565b905080611d155760405162461bcd60e51b815260206004820152601660248201527546756e6473206c6f636b6d656e74206661696c65642160501b604482015260640161059b565b6040805160e0810182523381526001600160a01b038b811660208084019182529383018c8152606084018c905260808401889052600060a085018190528a841660c0860152600a8054600181018255915284517fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8600690920291820180549186166001600160a01b031992831617815593517fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a9830180549190961691161790935551805193949193611e0e937fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2aa019291909101906120a4565b50606082015160038201556080820151600482015560a082015160058201805460ff19166001836002811115611e4657611e4661224c565b021790555060c08201518160050160016101000a8154816001600160a01b0302191690836001600160a01b0316021790555050506000600a8054905090507ff0fc2b9e205dc80773dd48a0988874b552235d380bacb3391bec4e9c80d2207581858a338e8e8c604051611ebf97969594939291906128d2565b60405180910390a19998505050505050505050565b611edc611f74565b6001600160a01b038116611f415760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161059b565b611f4a81611fce565b50565b6004546000908215611f5e57506005545b80611f6a606486612891565b610b8291906128b3565b6000546001600160a01b031633146110665760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161059b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000805b60035481101561207f57826001600160a01b031660038281548110612049576120496126ea565b6000918252602090912001546001600160a01b0316141561206d5750600192915050565b80612077816127be565b915050612022565b50600092915050565b6006546000908215611f5e575060075480611f6a606486612891565b8280546120b090612700565b90600052602060002090601f0160209004810192826120d25760008555612118565b82601f106120eb57805160ff1916838001178555612118565b82800160010185558215612118579182015b828111156121185782518255916020019190600101906120fd565b50612124929150612188565b5090565b6040518060e0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016060815260200160008152602001600081526020016000600281111561217b5761217b61224c565b8152600060209091015290565b5b808211156121245760008155600101612189565b8015158114611f4a57600080fd5b600080604083850312156121be57600080fd5b8235915060208301356121d08161219d565b809150509250929050565b6000602082840312156121ed57600080fd5b5035919050565b60005b8381101561220f5781810151838201526020016121f7565b83811115610eb65750506000910152565b600081518084526122388160208601602086016121f4565b601f01601f19169290920160200192915050565b634e487b7160e01b600052602160045260246000fd5b6003811061228057634e487b7160e01b600052602160045260246000fd5b9052565b600060018060a01b03808a168352808916602084015260e060408401526122ae60e0840189612220565b91508660608401528560808401526122c960a0840186612262565b80841660c08401525098975050505050505050565b6001600160a01b0381168114611f4a57600080fd5b6000806040838503121561230657600080fd5b8235612311816122de565b946020939093013593505050565b60006020828403121561233157600080fd5b813561233c816122de565b9392505050565b60208152600061233c6020830184612220565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261237d57600080fd5b813567ffffffffffffffff8082111561239857612398612356565b604051601f8301601f19908116603f011681019082821181831017156123c0576123c0612356565b816040528381528660208588010111156123d957600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600080600060e0888a03121561241457600080fd5b873561241f816122de565b9650602088013561242f816122de565b9550604088013567ffffffffffffffff81111561244b57600080fd5b6124578a828b0161236c565b955050606088013593506080880135925060a08801356003811061247a57600080fd5b915060c088013561248a816122de565b8091505092959891949750929550565b600080604083850312156124ad57600080fd5b82356124b8816122de565b915060208301356121d0816122de565b600080600080608085870312156124de57600080fd5b84356124e9816122de565b935060208501356124f9816122de565b9250604085013567ffffffffffffffff81111561251557600080fd5b6125218782880161236c565b949793965093946060013593505050565b60008060006060848603121561254757600080fd5b8335925060208401356125598161219d565b915060408401356125698161219d565b809150509250925092565b60208152600060018060a01b03808451166020840152806020850151166040840152604084015160e060608501526125b0610100850182612220565b905060608501516080850152608085015160a085015260a08501516125d860c0860182612262565b5060c094909401511660e092909201919091525090565b6020808252825182820181905260009190848201906040850190845b818110156126305783516001600160a01b03168352928401929184019160010161260b565b50909695505050505050565b600080600080600060a0868803121561265457600080fd5b853561265f816122de565b9450602086013567ffffffffffffffff81111561267b57600080fd5b6126878882890161236c565b94505060408601359250606086013561269f8161219d565b915060808601356126af816122de565b809150509295509295909350565b634e487b7160e01b600052601160045260246000fd5b6000828210156126e5576126e56126bd565b500390565b634e487b7160e01b600052603260045260246000fd5b600181811c9082168061271457607f821691505b6020821081141561273557634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561274d57600080fd5b5051919050565b6020808252818101527f4e6f7420656e6f7567682066756e64732061742074686520636f6e7472616374604082015260600190565b60006020828403121561279b57600080fd5b815161233c8161219d565b600082198211156127b9576127b96126bd565b500190565b60006000198214156127d2576127d26126bd565b5060010190565b600082516127eb8184602087016121f4565b9190910192915050565b600080835481600182811c91508083168061281157607f831692505b602080841082141561283157634e487b7160e01b86526022600452602486fd5b818015612845576001811461285657612883565b60ff19861689528489019650612883565b60008a81526020902060005b8681101561287b5781548b820152908501908301612862565b505084890196505b509498975050505050505050565b6000826128ae57634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156128cd576128cd6126bd565b500290565b878152866020820152856040820152600060018060a01b038087166060840152808616608084015260e060a084015261290e60e0840186612220565b915080841660c0840152509897505050505050505056fea264697066735822122069d63f70d636ae8f0f575b0875b1f28514f33e725cf81b3ec1787821ae53b59864736f6c634300080900338be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'

type EscrowConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: EscrowConstructorParams): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class Escrow__factory extends ContractFactory {
  constructor(...args: EscrowConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<Escrow> {
    return super.deploy(overrides || {}) as Promise<Escrow>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: PromiseOrValue<string> }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): Escrow {
    return super.attach(address) as Escrow
  }
  override connect(signer: Signer): Escrow__factory {
    return super.connect(signer) as Escrow__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): EscrowInterface {
    return new utils.Interface(_abi) as EscrowInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Escrow {
    return new Contract(address, _abi, signerOrProvider) as Escrow
  }
}
