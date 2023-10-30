import { ethers } from 'ethers'
import * as constant from './constants'
import { CurrentConfig } from '../config'

const provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(CurrentConfig.rpc.mainnet);

