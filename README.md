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
# NFT-MarketPlace
<p align="center">
  <img src="https://user-images.githubusercontent.com/77429981/162573406-7a3aab05-26f5-4d5b-ae40-f1cc0380e421.svg" />
</p>

<!-- ![Group 3](https://user-images.githubusercontent.com/77429981/162573406-7a3aab05-26f5-4d5b-ae40-f1cc0380e421.svg) -->
We have built a marketplace for the people who cherish the uniqueness of an asset and like to own it.
Merging the power of blockchain technology and the idea of uniqueness, we have built an NFT Marketplace. NFT stands for Non-Fungible Tokens. NFTs are unique cryptographic tokens that exist on a blockchain and cannot be replicated. "Tokenizing" these real-world tangible assets makes buying, selling, and trading them more efficient while reducing the probability of fraud. 

<!-- <p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- ## About The Project -->
![Screenshot from 2022-04-05 17-36-27](https://user-images.githubusercontent.com/77429981/162359827-87c01a68-1700-40bf-87c2-4edd1c1b8141.png)

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

## Features
- Create a NFT
- Sell a NFT
- Buy a NFT
- Resell a NFT

![Screenshot from 2022-04-05 17-26-41](https://user-images.githubusercontent.com/77429981/162359914-6a0d4b00-0916-4be6-b747-28101c733c2f.png)

## Built With

* [Next.js](https://nextjs.org/)
* [Etherium](https://ethereum.org/en/)
* [Hardhat](https://hardhat.org/)
* [Solidity](https://docs.soliditylang.org/)
* [MongoDB](https://www.mongodb.com/)
* [Cloudinary](https://cloudinary.com/)

<!-- <p align="right">(<a href="#top">back to top</a>)</p> -->



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


## Final View of Project

#### 1. Home
![Home](https://user-images.githubusercontent.com/77429981/162573961-28a75610-e396-4a82-b9ee-a26393a36ee7.png)

### 2. Sell Asset
![Create_NFT_wallet](https://user-images.githubusercontent.com/77429981/162574004-1f580c59-404d-410d-8cb5-583a84c8732d.png)

### 3. My Collection
![Screenshot from 2022-04-05 18-47-52](https://user-images.githubusercontent.com/77429981/162574040-3b73bc6e-f4bf-425c-bcfd-72fdf05d7e32.png)


### 4. Dashboard
![Screenshot from 2022-04-05 17-36-56](https://user-images.githubusercontent.com/77429981/162574048-38ba3245-48ff-418e-bca1-b16bb750958c.png)
