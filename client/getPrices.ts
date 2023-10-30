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
    address_from,
    address_to,
    CurrentConfig.tokens.poolFee,
    amountIn.toString(),
    0
  )

  const outputAmount = ethers.formatUnits(
    quoteAmountOut, 
    CurrentConfig.tokens.out.decimals
  )

  return outputAmount;
}

const main = async (): Promise<void> => {
  const amount_in: string = '100';

  const amountOut: string = await getPricesV3(
    CurrentConfig.tokens.in.address,
    CurrentConfig.tokens.out.address,
    amount_in
  );

  console.log('amount out: ', amountOut.slice(0, 8))
}

main();
