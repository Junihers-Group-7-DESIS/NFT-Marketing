<!-- # NFT-Marketing Dapp
### Setting up the application in local system


- Clone the repository in your local system and open in an ide (eg: VS Code)
- Ensure node and npm are installed in your system
- Run command ``` npm install ```
- To compile the contracts, Run command ```npx hardhat compile```
- To get dummy accounts, Run command ```npx hardhat node```
- To get local network, Run command ```npx hardhat run scripts/deploy.js --network localhost```
- Add .env file with mongoDB data
- connect wallet with localhost network
For the further steps, you need to install metamask extension in your browser(preffered chrome)
After adding and setting up metamask extension in your browser, add a local network in metamask.
[Follow this link](https://stackoverflow.com/a/68814079/15968090) -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
We have built a marketplace for the people who cherish the uniqueness of an asset and like to own it.
Merging the power of blockchain technology and the idea of uniqueness, we have built an NFT Marketplace. NFT stands for Non-Fungible Tokens. NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated. "Tokenizing" these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud. 
<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Next.js](https://nextjs.org/)
* [Etherium](https://ethereum.org/en/)
* [Hardhat](https://hardhat.org/)
* [Solidity](https://docs.soliditylang.org/)
* [MongoDB](https://www.mongodb.com/)
* [Cloudinary](https://cloudinary.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
Fork and clone this repository in your local system.


### Installation
* npm
  ```sh
  npm install
  ```
* Hardhat
  
  - To compile the contracts, Run command ```npx hardhat compile```
  - To get dummy accounts, Run command ```npx hardhat node```
  - To get local network, Run command ```npx hardhat run scripts/deploy.js --network localhost```

* Create account on MongoDB and save its credentials in .env file  ``` MONGODB_URI and MONGODB_DB  ```
* Store DB username and password in config.js 
 ``` dbusername and dbpassword ```
* Connect wallet with localhost network
  - For the further steps, you need to install metamask extension in your browser(preffered chrome) After adding and setting up metamask extension in your browser, add a local network in metamask. [Link](https://stackoverflow.com/a/68814079/15968090)

#### Run application
- Run commands ```npm run dev```
