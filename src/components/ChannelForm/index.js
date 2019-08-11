import React from 'react'
import View from './view'
import * as request from 'superagent'
import { url } from '../../constants'

export default class ChannelForm extends React.Component {
  state = { name: '' }

  onSubmit = async (event) => {
    event.preventDefault()

    await request
      .post(`${url}/channel`)
      .send({ name: this.state.name })

    this.setState({ name: '' })
  }

  onChange = (event) => {
    const { value } = event.target

    this.setState({ name: value })
  }

  render () {
    return <View
      onSubmit={this.onSubmit}
      value={this.state.name}
      onChange={this.onChange}
      user={this.props.user}
    />
  }
}
