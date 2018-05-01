import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
  Message,
} from 'semantic-ui-react'

import Layout from '../../components/Layout'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'

export default class CampaignNew extends Component {
  state = {
    errorMessage: '',
    loading: false,
    minimumContribution: '',
  }

  onSubmit = async (e) => {
    e.preventDefault()
    const { minimumContribution } = this.state
    this.setState({ loading: true, errorMessage: '' })
    try {
      const accounts = await web3.eth.getAccounts()
      await factory.methods
        .createCampaign(minimumContribution)
        .send({
          from: accounts[0]
        })
    } catch (err) {
      this.setState({ errorMessage: err.message })
    }
    this.setState({ loading: false })
  }

  handleInputChange = (e) => this.setState({ minimumContribution: e.target.value })

  render() {
    const {
      errorMessage,
      loading,
      minimumContribution
    } = this.state
    return (
      <Layout>
        <h3>Create a Campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={minimumContribution}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Message error header="Oops!" content={errorMessage} />
          <Button loading={loading} primary>Create!</Button>
        </Form>
      </Layout>
    )
  }
}
