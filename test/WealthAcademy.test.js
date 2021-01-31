// const { inTransaction } = require("@openzeppelin/test-helpers/src/expectEvent");
const { BN, constants, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");
const { assert } = require("chai");
// const { expect } = require("chai");
const truffleAssert = require("truffle-assertions");


const WealthAcademy = artifacts.require('WealthAcademy');

contract('WealthAcademy', (accounts) => {
  const [owner, newOwner, approved, anotherApproved, operator, other] = accounts;
  const tokenNameExpected = "Wealth Academy Token";
  const tokenSymbolExpected ="WAT";

  const firstTokenId = new BN ('0');
  const secondTokenId = new BN('1');
  let WAInstance;

  beforeEach(async () => {
    WAInstance = await WealthAcademy.deployed();
    const name = await WAInstance.name();
    const symbol = await WAInstance.symbol();
    assert.equal(name, tokenNameExpected, "Token name is not as expected");
    assert.equal(symbol, tokenSymbolExpected, "Token symbol is not as expected");
    await WAInstance.mint(owner, firstTokenId);
    await WAInstance.mint(owner, secondTokenId);
  });


  it('deploys successfully', async () => {
  });

  it('tests balanceOf()'), async () => {
    assert(new BigNumber(WAInstance.balanceOf(owner).isEqualTo(new BigNumber('2')));
  }

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