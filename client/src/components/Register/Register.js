import React, { Component } from 'react'
import { Form, Button, Icon, Popup } from 'semantic-ui-react'
import './Register.css'

export default class Register extends Component {
  render () {
    const { onFormChange, onRegisterSubmit, isOpen, handleOpen, regErr } = this.props

    return (
      <div>
        <Form onSubmit={onRegisterSubmit} className='even-height'>
          <Form.Field>
            <label className='left-align'>Full Name</label>
            <input name='username' type='text' onChange={onFormChange} />
          </Form.Field>
          <Form.Field>
            <label className='left-align'>Email</label>
            <input name='email' type='email' onChange={onFormChange} />
          </Form.Field>
          <Form.Field>
            <label className='left-align'>Password</label>
            <input name='password' type='password' onChange={onFormChange} />
          </Form.Field>
          <Popup
            trigger={
              <Button type='submit' animated>
                <Button.Content visible>Register</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>
            }
            content={regErr}
            on='click'
            open={isOpen}
            onOpen={handleOpen}
            position='bottom center'
          />
        </Form>
      </div>
    )
  }
}
