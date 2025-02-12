import React, { Component } from 'react'
import {
  Button,
  Card,
} from 'semantic-ui-react'

import Layout from '../components/Layout'

import factory from '../ethereum/factory'

export default class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call()
    return { campaigns }
  }

  renderCampaigns() {
    const { campaigns } = this.props
    const items = campaigns.map(campaign => ({
      header: campaign,
      description: <a>View Campaign</a>,
      fluid: true,
    }))
    return <Card.Group items={items} />
  }

  render() {
    return (
      <Layout>
        <h3>Open Campaigns</h3>
        <Button
          floated="right"
          content="Create Campaign"
          icon="add circle"
          primary
        />
        { this.renderCampaigns() }
      </Layout>
    )
  }
}
