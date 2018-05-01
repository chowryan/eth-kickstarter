const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol')
const source = fs.readFileSync(campaignPath, 'utf8')
const { contracts } = solc.compile(source, 1)

fs.ensureDirSync(buildPath)

const keys = Object.keys(contracts)
console.log(keys)
keys.forEach((key) => {
  fs.outputJsonSync(
    path.resolve(buildPath, `${key.replace(':', '')}.json`),
    contracts[key],
  )
})
