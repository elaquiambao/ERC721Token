const { BN, constants, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");
const { assert } = require("chai");
const truffleAssert = require("truffle-assertions");
const WealthAcademy = artifacts.require('WealthAcademy');

contract('WealthAcademy', (accounts) => {
  let trainee1= accounts[1];
  const tokenNameExpected = "Wealth Academy Token";
  const tokenSymbolExpected ="WAT";

  const TokenId1 = 0;
  const TokenId2 = 1;
  let WAInstance;

  before(async () => {
    WAInstance = await WealthAcademy.deployed();
    const name = await WAInstance.name();
    const symbol = await WAInstance.symbol();
    assert.equal(name, tokenNameExpected, "Token name is not as expected");
    assert.equal(symbol, tokenSymbolExpected, "Token symbol is not as expected");
    await WAInstance.safeMint(trainee1, TokenId1);
    await WAInstance.safeMint(trainee1, TokenId2);
  });


  it('deploys successfully', async () => {
    assert(WAInstance.address !== " ");
  });

  it('tests balanceOf()'), async () => {
    const trainee1Balance = await WAInstance.balanceOf.call(trainee1);
    console.log(trainee1Balance);
    assert(new BN(trainee1Balance).isEqualTo(new BN(2)), "Token balance is not as expected");
  };

  it('tests ownerOf()'), async () => {

    
  }

  it('tests safeTransferFrom()'), async () => {
    
  }

  it('tests safeTransferFrom(data)'), async () => {
    
  }

  it('tests transferFrom()'), async () => {
    
  }

  it('tests approve()'), async () => {
    
  }

  it('tests setApprovalForAll()'), async () => {
    
  }

  it('tests getApproved()'), async () => {
    
  }

  it('tests isApprovedForAll()'), async () => {
    
  }
  
  it('tests ERC165 supportsInterface()'), async () => {
    
  }

  it('tests Transfer event'), async () => {
    
  }

  it('tests Approval event'), async () => {
    
  }

  it('tests ApprovalForAll event'), async () => {
    
  }    
    
})