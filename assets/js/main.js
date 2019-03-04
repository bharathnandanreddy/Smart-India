
if (typeof web3 !== 'undefined') {
	  web3 = new Web3(web3.currentProvider);
	} else {
	  // set the provider you want from Web3.providers
   	 web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
	}
   	 web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

	web3.eth.defaultAccount=web3.eth.accounts[0];
	 contract=web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "sender",
				"type": "address"
			},
			{
				"name": "receiver",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "sendItem",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "n",
				"type": "string"
			},
			{
				"name": "ad",
				"type": "address"
			},
			{
				"name": "stock",
				"type": "uint256"
			}
		],
		"name": "setUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "address"
			}
		],
		"name": "getStock",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);
obj=contract.at('0x8dac576b2b7b552d0027c11495ff183c04396116');
console.log(obj);
transactionObj={
	from:web3.eth.defaultAccount,
	gas:2000000,
	gasPrice:10000
};


web3.eth.defaultAccount=web3.eth.accounts[0];
	 mcontract=web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "n",
				"type": "string"
			},
			{
				"name": "ad",
				"type": "address"
			},
			{
				"name": "stock",
				"type": "uint256"
			}
		],
		"name": "setUser",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "receiver",
				"type": "address"
			},
			{
				"name": "sender",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "sendItem",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "address"
			}
		],
		"name": "getStock",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "constructor"
	}
]);
mobj=mcontract.at('0x0f876e2f464e608a8efc4ecbc35f69a7e62f47cf');


web3.eth.defaultAccount=web3.eth.accounts[0];
	 pcontract=web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "ad",
				"type": "address"
			}
		],
		"name": "hod",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "i",
				"type": "string"
			},
			{
				"name": "ad",
				"type": "address"
			}
		],
		"name": "sendPension",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ad",
				"type": "address"
			}
		],
		"name": "pao",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "n",
				"type": "string"
			},
			{
				"name": "a",
				"type": "uint256"
			},
			{
				"name": "dept",
				"type": "string"
			},
			{
				"name": "pos",
				"type": "string"
			},
			{
				"name": "sal",
				"type": "uint256"
			},
			{
				"name": "b",
				"type": "string"
			},
			{
				"name": "ad",
				"type": "address"
			}
		],
		"name": "setBeneficiary",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "ad",
				"type": "address"
			}
		],
		"name": "getApproval",
		"outputs": [
			{
				"name": "",
				"type": "int256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);
pobj=pcontract.at('0xf67bc022b84540cb18d2e280549803b1c9e193d5');


console.log(mobj);


