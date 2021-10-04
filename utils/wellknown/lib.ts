export const wellknown = {
  harmony: {
    addresses: {
      usdc: '0x985458E523dB3d53125813eD68c274899e9DfAb4',
      usdt: '0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f',
      dai: '0xEf977d2f931C1978Db5F6747666fa1eACB0d0339',
      ust: '0x224e64ec1BDce3870a6a6c777eDd450454068FEC',
    },
  },
  moonriver: {
    addresses: {
      usdc: '0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D',
      usdt: '0xB44a9B6905aF7c801311e8F4E76932ee959c663C',
      dai: '0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844',
      busd: '0x5D9ab5522c64E1F6ef5e3627ECCc093f56167818',
    },
  },
};

export type Wellknown = typeof wellknown;
