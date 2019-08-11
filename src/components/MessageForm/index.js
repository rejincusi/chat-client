import React from 'react'
import * as request from 'superagent'
import View from './view'
import { url } from '../../constants'

export default class MessageForm extends React.Component {
  state = {
    message: ''
  }

  onSubmit = async (event) => {
    event.preventDefault()

    await request
      .post(`${url}/message`)
      .send({
        message: this.state.message,
        user: this.props.user,
        channelId: this.props.channelId
      })

    this.setState({ message: '' })
  }

  onChange = (event) => {
    const { value } = event.target

    this.setState({ message: value })
  }

  render () {
    return <View
      onSubmit={this.onSubmit}
      value={this.state.message}
      onChange={this.onChange}
    />
  }
}