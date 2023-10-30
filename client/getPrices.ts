import { ethers } from 'ethers'
import * as constant from './constants'
import { getProvider } from '../utils/providers';
import { CurrentConfig } from '../config';

const quoterContract = new ethers.Contract(
  constant.QUOTER_CONTRACT_V1, 
  constant.QUOTER_ABI, 
  getProvider()
)

async function getPricesV3(address_from: string, address_to: string, amount_in: string): Promise<string> {
  const amountIn = ethers.parseUnits(amount_in, CurrentConfig.tokens.in.decimals)

  const quoteAmountOut = await quoterContract.quoteExactInputSingle.staticCall(
    constant.USDC_CONTRACT,
    constant.WETH_CONTRACT,
    3000,
    amountIn.toString(),
    0
  )

  const outputAmount = ethers.formatUnits(
    quoteAmountOut, 
    CurrentConfig.tokens.out.decimals
  )

  return outputAmount;
}

const main = async () => {
  const amount_in = '100';
  const amountOut: string = await getPricesV3(constant.USDC_CONTRACT, constant.WETH_CONTRACT, amount_in);

  console.log('amount out: ', amountOut.slice(0, 8))
}

main();
