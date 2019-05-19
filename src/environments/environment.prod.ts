export const environment = {
  production: true,
  host: 'https://beta.monedai.com/api/v1',
  tokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
  toAddress: '0x4C1547bE2C6F77C514840041b5A53D32f69E2C64',
  contractERC: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
  offerAmt: 100,
  deposit: 'DEPOSIT',
  approve: 'APPROVE',
  gabi: [
    {
      'constant': true,
      'inputs': [],
      'name': 'name',
      'outputs': [
        {
          'name': '',
          'type': 'string'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': '_spender',
          'type': 'address'
        },
        {
          'name': '_value',
          'type': 'uint256'
        }
      ],
      'name': 'approve',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'totalSupply',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': '_from',
          'type': 'address'
        },
        {
          'name': '_to',
          'type': 'address'
        },
        {
          'name': '_value',
          'type': 'uint256'
        }
      ],
      'name': 'transferFrom',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'decimals',
      'outputs': [
        {
          'name': '',
          'type': 'uint8'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '_owner',
          'type': 'address'
        }
      ],
      'name': 'balanceOf',
      'outputs': [
        {
          'name': 'balance',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'symbol',
      'outputs': [
        {
          'name': '',
          'type': 'string'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': '_to',
          'type': 'address'
        },
        {
          'name': '_value',
          'type': 'uint256'
        }
      ],
      'name': 'transfer',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '_owner',
          'type': 'address'
        },
        {
          'name': '_spender',
          'type': 'address'
        }
      ],
      'name': 'allowance',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'payable': true,
      'stateMutability': 'payable',
      'type': 'fallback'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': 'owner',
          'type': 'address'
        },
        {
          'indexed': true,
          'name': 'spender',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'value',
          'type': 'uint256'
        }
      ],
      'name': 'Approval',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': 'from',
          'type': 'address'
        },
        {
          'indexed': true,
          'name': 'to',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'value',
          'type': 'uint256'
        }
      ],
      'name': 'Transfer',
      'type': 'event'
    }
  ],
  minABI: [
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'balances',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'withdraw',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'deposit',
      'outputs': [
        {
          'name': 'success',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'to',
          'type': 'address'
        },
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'reallocate',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'Deposit',
      'type': 'event'
    }
  ],
  minABIBal: [
    {
      'constant': true,
      'inputs': [{ 'name': '_owner', 'type': 'address' }],
      'name': 'balanceOf',
      'outputs': [{ 'name': 'balance', 'type': 'uint256' }],
      'type': 'function'
    },
    // decimals
    {
      'constant': true,
      'inputs': [],
      'name': 'decimals',
      'outputs': [{ 'name': '', 'type': 'uint8' }],
      'type': 'function'
    }
  ],
  minABIDeposit: [
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'balances',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'withdraw',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'deposit',
      'outputs': [
        {
          'name': 'success',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'to',
          'type': 'address'
        },
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'reallocate',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'Deposit',
      'type': 'event'
    }
  ],
  minABIAllowance: [
    {
      'constant': true,
      'inputs': [],
      'name': 'name',
      'outputs': [
        {
          'name': '',
          'type': 'string'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': '_spender',
          'type': 'address'
        },
        {
          'name': '_value',
          'type': 'uint256'
        }
      ],
      'name': 'approve',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'totalSupply',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': '_from',
          'type': 'address'
        },
        {
          'name': '_to',
          'type': 'address'
        },
        {
          'name': '_value',
          'type': 'uint256'
        }
      ],
      'name': 'transferFrom',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'decimals',
      'outputs': [
        {
          'name': '',
          'type': 'uint8'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '_owner',
          'type': 'address'
        }
      ],
      'name': 'balanceOf',
      'outputs': [
        {
          'name': 'balance',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [],
      'name': 'symbol',
      'outputs': [
        {
          'name': '',
          'type': 'string'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': '_to',
          'type': 'address'
        },
        {
          'name': '_value',
          'type': 'uint256'
        }
      ],
      'name': 'transfer',
      'outputs': [
        {
          'name': '',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': true,
      'inputs': [
        {
          'name': '_owner',
          'type': 'address'
        },
        {
          'name': '_spender',
          'type': 'address'
        }
      ],
      'name': 'allowance',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'payable': true,
      'stateMutability': 'payable',
      'type': 'fallback'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': 'owner',
          'type': 'address'
        },
        {
          'indexed': true,
          'name': 'spender',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'value',
          'type': 'uint256'
        }
      ],
      'name': 'Approval',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'name': 'from',
          'type': 'address'
        },
        {
          'indexed': true,
          'name': 'to',
          'type': 'address'
        },
        {
          'indexed': false,
          'name': 'value',
          'type': 'uint256'
        }
      ],
      'name': 'Transfer',
      'type': 'event'
    }
  ],
  minABIEscrow: [
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'balances',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'withdraw',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'deposit',
      'outputs': [
        {
          'name': 'success',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'to',
          'type': 'address'
        },
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'reallocate',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'Deposit',
      'type': 'event'
    }
  ],
  withdrawminABI: [
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'balances',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'withdraw',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'deposit',
      'outputs': [
        {
          'name': 'success',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'to',
          'type': 'address'
        },
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'reallocate',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'Deposit',
      'type': 'event'
    }
  ]
  ,
  reallocateMinABI: [
    {
      'constant': true,
      'inputs': [
        {
          'name': '',
          'type': 'address'
        }
      ],
      'name': 'balances',
      'outputs': [
        {
          'name': '',
          'type': 'uint256'
        }
      ],
      'payable': false,
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'withdraw',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'deposit',
      'outputs': [
        {
          'name': 'success',
          'type': 'bool'
        }
      ],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'constant': false,
      'inputs': [
        {
          'name': 'to',
          'type': 'address'
        },
        {
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'reallocate',
      'outputs': [],
      'payable': false,
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': false,
          'name': 'tokens',
          'type': 'uint256'
        }
      ],
      'name': 'Deposit',
      'type': 'event'
    }
  ]
};
