const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Ensure the value is a valid BigNumberish (e.g., string or number)
  const value = "1000000000000000000"; // 1 ETH
  const MyContract = await hre.ethers.getContractFactory("Lock");
  const myContract = await MyContract.deploy(value);

  await myContract.waitForDeployment();

  const deployedAddress = await myContract.getAddress();
  console.log("MyContract deployed to:", deployedAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });