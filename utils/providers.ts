import { ethers, Provider } from 'ethers'
import { CurrentConfig } from '../config';

export function getProvider(): Provider {
  return new ethers.JsonRpcProvider(CurrentConfig.rpc.mainnet);
}
