import {parseUnits} from 'ethers/lib/utils';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async ({deployments, getNamedAccounts, wellknown}) => {
  const {deploy, execute, get} = deployments;
  const {creator} = await getNamedAccounts();
  console.log('> creator', creator);
  console.log('> Deploy UltimateWeapon');

  const rapperPunks = await deploy('UltimateWeapon', {
    contract: 'UltimateWeapon',
    from: creator,
    log: true,
    args: [],
  });

  for (let i = 0; i < 2; i++) {
    await execute('UltimateWeapon', {from: creator, log: true}, 'mintTo', creator);
  }
};

export default func;

func.skip = async ({network}) => {
  return network.name != 'matic';
};

func.tags = ['UltimateWeapon'];
