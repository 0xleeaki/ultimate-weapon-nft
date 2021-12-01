import {parseUnits} from 'ethers/lib/utils';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async ({deployments, getNamedAccounts, wellknown}) => {
  const {deploy, execute, get} = deployments;
  const {creator} = await getNamedAccounts();
  console.log('> creator', creator);
  console.log('> Deploy LowPolyHome');

  const rapperPunks = await deploy('LowPolyHome', {
    contract: 'LowPolyHome',
    from: creator,
    log: true,
    args: [],
  });

  for (let i = 0; i < 5; i++) {
    await execute('LowPolyHome', {from: creator, log: true}, 'mintTo', creator);
  }
};

export default func;

func.skip = async ({network}) => {
  return network.name != 'matic';
};

func.tags = ['LowPolyHome'];
