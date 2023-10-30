import { ethers } from 'ethers'
import { CurrentConfig } from '../config'
import * as constant from './constants'

const provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(CurrentConfig.rpc.mainnet);

