import { ethers } from 'ethers'
import { config } from 'dotenv'
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'
import Quoter from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'
import * as address from './addressList'

config();
const {
  ETH_MAINNET_URL
} = process.env;

const quoter = address.QUOTER_CONTRACT_V1;
const provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(ETH_MAINNET_URL);
const quoterContract = new ethers.Contract(quoter, Quoter.abi, provider)

async function getPricesV3(address_from: string, address_to: string, amount_in: string): Promise<string> {
  const amountIn = ethers.parseUnits(amount_in, 6) // USDC

  const quoteAmountOut = await quoterContract.quoteExactInputSingle.staticCall(
    address.USDC_CONTRACT,
    address.WETH_CONTRACT,
    3000,
    amountIn.toString(),
    0
  )

  // Format output amount
  const outputAmount = ethers.formatUnits(quoteAmountOut.toString(), 18)

  return outputAmount;
}

const main = async (amount_in: string) => {
  const amountOut: string = await getPricesV3(address.USDC_CONTRACT, address.WETH_CONTRACT, amount_in);

  console.log('amount out: ', amountOut)
}

main('1819');
