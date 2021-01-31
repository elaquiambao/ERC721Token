const { inTransaction } = require("@openzeppelin/test-helpers/src/expectEvent");

const WealthAcademy = artifacts.require('WealthAcademy');

contract('WealthAcademy', (accounts) => {

  before(async () => {
    contract = await WealthAcademy.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
    })

    it('tests balanceOf()')

  })  
})