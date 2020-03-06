import React, { Component } from 'react'
import { Card, Input, Form, Button, Icon } from 'semantic-ui-react'

export default class TickerInfo extends Component {
  render () {
    const { symbolData, onBuySubmit, onFormChange, qty, hideSymbol } = this.props

    return (
      <Card fluid>

        <Card.Content>
          <i style={{ float: 'right', cursor: 'pointer' }} className='close icon' onClick={hideSymbol} />
          <Card.Header>{symbolData.companyName}</Card.Header>
          <Card.Header style={{ float: 'right' }}>Current Price: ${symbolData.latestPrice}</Card.Header>
          <Card.Meta>{symbolData.symbol}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Form onSubmit={onBuySubmit}>
            <Form.Field
              control={Input}
              value={qty}
              name='qty'
              type='number'
              min='0'
              placeholder='Enter Quantity...'
              onChange={onFormChange}
            />
            <Button type='buy' fluid animated>
              <Button.Content visible>Buy</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>

          </Form>
        </Card.Content>
      </Card>
    )
  }
}
