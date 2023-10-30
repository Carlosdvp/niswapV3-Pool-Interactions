import { Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import { config } from 'dotenv'
import * as constant from './client/constants'

config();

const {
  ETH_MAINNET_URL
} = process.env;

export interface Config {
  rpc: {
    local: string
    mainnet: string | undefined
  },
  tokens: {
    in: Token,
    out: Token,
    poolFee: number
  }
}

export const CurrentConfig: Config = {
  rpc: {
    local: 'http://localhost:8545',
    mainnet: ETH_MAINNET_URL
  },
  tokens: {
    in: constant.USDC_TOKEN,
    out: constant.WETH_TOKEN,
    poolFee: FeeAmount.MEDIUM
  }
}
