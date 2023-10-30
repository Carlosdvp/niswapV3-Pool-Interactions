import { ethers } from 'ethers'
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'
import Quoter from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json'
import * as constant from './constants'
import { CurrentConfig } from '../config'

const quoter = constant.QUOTER_CONTRACT_V1;
const provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(CurrentConfig.rpc.mainnet);
const quoterContract = new ethers.Contract(quoter, Quoter.abi, provider)

async function getPricesV3(address_from: string, address_to: string, amount_in: string): Promise<string> {
  const amountIn = ethers.parseUnits(amount_in, 6) // USDC

  const quoteAmountOut = await quoterContract.quoteExactInputSingle.staticCall(
    constant.USDC_CONTRACT,
    constant.WETH_CONTRACT,
    3000,
    amountIn.toString(),
    0
  )

  const outputAmount = ethers.formatUnits(quoteAmountOut.toString(), 18)

  return outputAmount;
}

const main = async (amount_in: string) => {
  const amountOut: string = await getPricesV3(constant.USDC_CONTRACT, constant.WETH_CONTRACT, amount_in);

  console.log('amount out: ', amountOut)
}

main('1819');
