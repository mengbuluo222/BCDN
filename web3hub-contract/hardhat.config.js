require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
import "@nomiclabs/hardhat-etherscan";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    opencampus: {
      url: `https://rpc.open-campus-codex.gelato.digital/`,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY ],
    },
  },
};