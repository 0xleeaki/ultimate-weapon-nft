import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';
import './utils/wellknown';
import '@nomiclabs/hardhat-etherscan';
import {node_url, accounts} from './utils/networks';

const SCAN_API_KEY = '';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      accounts: accounts('localhost'),
    },
    localhost: {
      url: 'http://localhost:8545',
      accounts: accounts('localhost'),
    },
    bsc: {
      url: 'https://bsc-dataseed.binance.org',
      accounts: accounts('bsc'),
      live: true,
    },
    matic: {
      url: 'https://polygon-rpc.com',
      accounts: accounts('matic'),
      live: true,
      gasPrice: 20e9
    },
    harmony: {
      url: 'https://api.harmony.one',
      chainId: 1666600000,
      accounts: accounts('harmony'),
      live: true,
    },
    moonriver: {
      url: 'https://rpc.moonriver.moonbeam.network',
      chainId: 1285,
      accounts: accounts('moonriver'),
      live: true,
    },
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 5,
    enabled: !!process.env.REPORT_GAS,
  },
  namedAccounts: {
    creator: 0,
    deployer: 1,
  },
  etherscan: {
    apiKey: SCAN_API_KEY,
  },
};

export default config;

