require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
    },
    bsc: {
      url: "https://binance.llamarpc.com ",
      accounts: ["0x689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd"]
    }
  },
  solidity: { compilers: [{ version: "0.8.9", }, { version: "0.6.6", },{ version: "0.5.0", }, { version: "0.6.0", settings: {}, }], },
};
