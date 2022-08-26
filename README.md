# Real Estate Marketplace Dapp

Real Estate Marketplace Dapp is a decentralized marketplace for house property owners.

- Every house property is mint as NFT
- zk-SNARKs proof protects the title's ownership privacy
- A title ownership can be verified through an ethereum solidity contract
- House properties can be traded on a public NFT marketplace OpenSea

## Software Versions 
* Truffle v5.4.6 (core: 5.4.6)
* Solidity - 0.8.7 (solc-js)
* Node v16.14.12
* Web3.js v1.5.1

## Testing
1. Clone this repository `git clone https://github.com/paulovsm/real_state_nft_marketplace_dapp`
2. Install dependencies `npm install`
3. Compile the contract `truffle compile`
4. Start Truffle dev environment `truffle dev`
5. Run Truffle test `truffle test`

## Deploying
1. Clone this repository `git clone https://github.com/paulovsm/real_state_nft_marketplace_dapp`
2. Install dependencies `npm install`
3. Compile the contract `truffle compile`
4. Add your own mnemonic in a new `.secret` file in the ./dapp folder
5. Add your own Infura API Key in a new `.rinkeby-infurakey` file in ./dapp folder
6. Migrate to rinkeby `truffle migrate --network rinkeby`

## Token Minting

- Move to `webapp` folder
- Install dependencies `npm install`
- Start web server `npm run dev`
- Navigate to [DApp frontend](http://localhost:8080)
- Mint some tokens

![token minting](logs/DApp%20Mint%20UI.png)

## Rinkeby accounts
- Contract owner & Property Seller:
    [0x3bcae4baead03e4dd8f113ed80ff11d48cfe5428](https://rinkeby.etherscan.io/address/0x3bcae4baead03e4dd8f113ed80ff11d48cfe5428)
- Property Reseller:
    [0xebefef47ec5ef3c7a82587a3c33c7fed8fc0f9cc](https://rinkeby.etherscan.io/address/0xebefef47ec5ef3c7a82587a3c33c7fed8fc0f9cc)

## Contract Address
- [0xf4C4a50192B1355820F90c8D0a0Cd973BdE04fD2](https://rinkeby.etherscan.io/address/0xf4C4a50192B1355820F90c8D0a0Cd973BdE04fD2)
- [ABI](dapp/build/contracts/SolnSquareVerifier.json)
- [Deployment log](logs/rinkeby-migration.log)

## OpenSea MarketPlace Link
[OpenSea Collection Link](https://testnets.opensea.io/collection/frevo-real-state)

![opensea collection](logs/OpenSea%20Collection.png)

## Listings
1. [Property 111](https://testnets.opensea.io/assets/rinkeby/0xf4c4a50192b1355820f90c8d0a0cd973bde04fd2/111)
2. [Property 123](https://testnets.opensea.io/assets/rinkeby/0xf4c4a50192b1355820f90c8d0a0cd973bde04fd2/123)
3. [Property 3214](https://testnets.opensea.io/assets/rinkeby/0xf4c4a50192b1355820f90c8d0a0cd973bde04fd2/3214)
4. [Property 8645](https://testnets.opensea.io/assets/rinkeby/0xf4c4a50192b1355820f90c8d0a0cd973bde04fd2/3214)
5. [Property 8876](https://testnets.opensea.io/assets/rinkeby/0xf4c4a50192b1355820f90c8d0a0cd973bde04fd2/8876)
6. [Property 1234](https://testnets.opensea.io/assets/rinkeby/0xf4c4a50192b1355820f90c8d0a0cd973bde04fd2/1234)
7. [Property 4444](https://testnets.opensea.io/assets/rinkeby/0xf4c4a50192b1355820f90c8d0a0cd973bde04fd2/4444)
8. [Property 4321](https://testnets.opensea.io/assets/rinkeby/0xf4c4a50192b1355820f90c8d0a0cd973bde04fd2/4321)
9. [Property 7453](https://testnets.opensea.io/assets/rinkeby/0xf4c4a50192b1355820f90c8d0a0cd973bde04fd2/7453)
10. [Property 9876](https://testnets.opensea.io/assets/rinkeby/0xf4c4a50192b1355820f90c8d0a0cd973bde04fd2/9876)


# Project Resources
* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
