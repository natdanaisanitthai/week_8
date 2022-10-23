require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    
    "optimism": {
       url: "https://opt-mainnet.g.alchemy.com/v2/ZRD0J1i3n7qYx16k1SRRhTt7hMsxb2_e",
       accounts: [ "307cb887c28505bafed47146a6c2406eac7084c7e12743fbc35498caee53d56f" ]
    }
  }
};
