const { expect } = require("chai");

describe("Contract Testing Starting.....", function () {
  let owner;
  let address1;
  let Contract;

  beforeEach(async()=>{
    [owner, address1] = await ethers.getSigners();
    const contractInstance = await ethers.getContractFactory("Lock");
    Contract = await contractInstance.deploy();
  })

  describe("Owner balance Testing.....", function() {
    it("Balance Testing.....", async() => {
      const bal = await Contract.balanceOf(owner.address);
      expect(bal).to.equal(100000);
    })

    it("Transfer Balance Testing.....", async() => {
      await Contract.transfer(address1.address, 10);
      expect(await Contract.balanceOf(owner.address)).to.equal(100000 - 10);
    })
  })

  describe("Require Statement Testing.....", function() {
    it("Account1 Testing.....", async() => {
      await expect(Contract.connect(address1).transfer(owner.address, 10)).to.be.revertedWith("You're balance is low then amount");
    })

    it("Again Account1 Testing.....", async() => {
      await expect(Contract.connect(address1).transfer(owner.address, 10)).to.be.reverted;
    })
  })
});
