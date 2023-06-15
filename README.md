# zkSync Testnet Paymaster Sample

Account abstraction feature demonstration using a paymaster contract to pay for user fees in currencies other than ether.

Sample to deploy a smart contract to zkSync and build a dApp that interacts with it using the zkSync development toolbox.

 **zkSync goerli**
- Paymaster: 0x8f0ea1312da29f17eabeb2f484fd3c112cccdd63
- Dapp contract
  - Simple greeting contract to demonstrate paymaster wallet interactions: 0x327260FF71083d2Fc0390f6Bd1BAe053a8148e1a
  
Develop:
````
hardhat compile
`````

```
cd dapp && npm run serve
