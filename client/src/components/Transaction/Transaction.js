import React, { Component } from 'react'
import { Table, Header } from 'semantic-ui-react'

export default class Transaction extends Component {
  render () {
    const { name, qty, ticker, createdAt, isMobile } = this.props
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }

    const mobileOptions = {
      hour: 'numeric',
      minute: 'numeric'
    }

    const date = new Date(createdAt)
    const formattedDate = date.toLocaleDateString('en-US', options)
    const mobileDate = date.toLocaleDateString('en-US', mobileOptions)

    if (isMobile) {
      return (
        <Table.Row>
          <Table.Cell>
            <Header as='h4'>
              {ticker}
            </Header>
          </Table.Cell>
          <Table.Cell>{qty}</Table.Cell>
          <Table.Cell>{mobileDate}</Table.Cell>
        </Table.Row>
      )
    }

    return (
      <Table.Row>
        <Table.Cell>
          <Header as='h3'>
            {name}
          </Header>
        </Table.Cell>
        <Table.Cell>{ticker}</Table.Cell>
        <Table.Cell>{qty}</Table.Cell>
        <Table.Cell>{formattedDate}</Table.Cell>
      </Table.Row>
    )
  }
}
