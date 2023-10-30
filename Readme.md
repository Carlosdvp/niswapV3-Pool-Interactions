# Uniswap V3

- this is will be a little different from working with Uniswap V2
- that is because uniswap V3 has what is called 'focused liquidity', when you add liquidity to a pool you decide the price range where your liquidity will live.

- we will also install some additional packages:
    - v3-sdk
    - sdk-core

- Uniswap SDK docs
https://docs.uniswap.org/sdk/v3/overview

- Uniswap Contract Deployments
https://docs.uniswap.org/contracts/v3/reference/deployments

- Some changes need to be made to the way the ABI methods are called for the Quoter V1 contract when using Ethers V6. These changes are detailed in the Notion Doc I made with my notes on the process.

# To Run the Application

- install the required packages: `npm install`
- run the app command to get the desired data: `npm run app`
