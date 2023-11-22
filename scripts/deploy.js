async function main() {
  const [owner] = await ethers.getSigners();
  const contractInstance = await ethers.getContractFactory("Lock");
  const Contract = await contractInstance.deploy();
  console.log(Contract.address);
}

main();