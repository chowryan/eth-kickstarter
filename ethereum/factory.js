import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'
import { CAMPAIGN_FACTORY_ADDRESS } from '../config/config'

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  CAMPAIGN_FACTORY_ADDRESS,
)

export default instance
