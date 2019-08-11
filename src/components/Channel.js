import React from 'react'
import { connect } from 'react-redux'
import MessageForm from './MessageForm'

class Channel extends React.Component {
  render () {
    const { channelId } = this.props.match.params

    console.log('channelId test:', channelId)

    console.log('this.props.channels:', this.props.channels)

    const channel = this.props.channels
      .find(channel => {
        console.log('find channel test:', channel)
        return channel.id === parseInt(channelId)
      })

    console.log('channel test:', channel)

    return <div>
      <h3>{channel.name}</h3>

      <MessageForm
        user={this.props.user}
        channelId={channel.id}
      />

      <div>
        {channel
          .messages
          .reverse()
          .map(message => <div>
            {message.user}: {message.text}
          </div>)
        }
      </div>
    </div>
  }
}

function mapStateToProps (state) {
  console.log('state test:', state)
  return {
    channels: state.channels,
    user: state.user
  }
}

export default connect(
  mapStateToProps
)(Channel)
