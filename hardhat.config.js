/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
module.exports = {
  solidity: "0.8.9",
  networks:{
    mumbai:{
      url: process.env.API_Key,
      accounts: [process.env.Private_Key],
    },
  },
};
