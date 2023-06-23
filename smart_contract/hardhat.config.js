require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.18',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/At8SElgK5j9YY0sOrtveadSP_fCc1O3O',
      accounts: ['bc7f494d61c82aadc4e226abc7d37797f4f5749b3b35a331df6bc44f705ddf0c'],
    },
  },
};
