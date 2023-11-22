// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

import "hardhat/console.sol";

contract Lock {
    string public name = "Ayush";
    string public symbol = "AYU";
    uint256 public totalSupply = 100000;

    address public owner;

    mapping(address => uint256) public balance;

    constructor() {
        balance[msg.sender] = totalSupply;
        owner = msg.sender;
    }

    function transfer(address to, uint256 value) external {
        require(balance[msg.sender] >= value, "You're balance is low then amount");
        console.log("**Sender Balance Before Transaction: %s**", balance[msg.sender]);
        balance[msg.sender] -= value;
        balance[to] = value;
        console.log("**Sender Balance After Transaction: %s**", balance[msg.sender]); 
    }

    function balanceOf(address account) external view returns (uint256) {
        return balance[account];
    }
}
