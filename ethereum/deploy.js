const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')

const compiledFactory = require('./build/CampaignFactory.json')
const { MNEMONIC_PASSWORD, PROVIDER_URI } = require('../config/config')

const provider = new HDWalletProvider(MNEMONIC_PASSWORD, PROVIDER_URI)
const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()

  console.log('Attempting to deploy from account', accounts[0])

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] })

  console.log('Successfully deployed to', result.options.address)
}
deploy()
