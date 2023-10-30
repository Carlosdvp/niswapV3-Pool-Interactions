import { SUPPORTED_CHAINS, Token } from '@uniswap/sdk-core'
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'

// Uniswap V3
export const POOL_FACTORY_CONTRACT_ADDRESS =  '0x1F98431c8aD98523631AE4a59f267346ea31F984'
export const SWAP_ROUTER = '0xE592427A0AEce92De3Edee1F18E0157C05861564'
export const QUOTER_CONTRACT_V1 = '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6'
export const QUOTER_CONTRACT_V2 = '0x61fFE014bA17989E743c5F6cB21bF9697530B21e'

// ABIs
export const POOL_ABI = IUniswapV3PoolABI;

// tokens
export const WETH_CONTRACT = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
export const USDC_CONTRACT = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'

export const WETH_TOKEN = new Token(
  SUPPORTED_CHAINS[0],
  WETH_CONTRACT,
  18,
  'WETH',
  'Wrapped Ether',
)

export const USDC_TOKEN = new Token(
  SUPPORTED_CHAINS[0],
  USDC_CONTRACT,
  6,
  'USDC',
  'USD Coin'
)
