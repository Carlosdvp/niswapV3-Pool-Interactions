import { ethers } from 'ethers'
import { computePoolAddress } from '@uniswap/v3-sdk';
import { CurrentConfig } from '../config'
import { getProvider } from '../utils/providers';
import * as constant from './constants'

async function getPoolConstants(): Promise<{token0: string, token1: string, fee: number}> {
  const currentPoolAddress = computePoolAddress({
    factoryAddress: constant.POOL_FACTORY_CONTRACT_ADDRESS,
    tokenA: CurrentConfig.tokens.in,
    tokenB: CurrentConfig.tokens.out,
    fee: CurrentConfig.tokens.poolFee
  })
  
  const currentPoolContract = new ethers.Contract(
    currentPoolAddress,
    constant.POOL_ABI,
    getProvider()
  )

  // Getting Pool metadata from the Pool smart contract 
  const [token0, token1, fee] = await Promise.all([
    currentPoolContract.token0(),
    currentPoolContract.token1(),
    currentPoolContract.fee()
  ])

  return { token0, token1, fee }
}

const main = async () => {
  const poolData = await getPoolConstants();

  console.log('Pool Data:', poolData)
}

main();
