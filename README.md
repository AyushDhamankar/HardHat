# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Use this hardhat version for debugging
```shell
npm install --save-dev hardhat@^2.7.0
```
And use this solidity version in hardhat.config.js
```shell
solidity: "0.8.9",
```

To Compile Smart Contract
```shell
cd contracts
npx hardhat compile
```

To Test Smart Contract
```shell
cd..
npx hardhat test
```

To Deploy Smart Contract on live network
```shell
cd..
npx hardhat run scripts/deploy.js --network mumbai
```
