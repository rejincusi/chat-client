import React from 'react'
import { allChannels } from '../actions'
import { connect } from 'react-redux'
import UserForm from './UserForm'
import ChannelForm from './ChannelForm'
import * as request from 'superagent'
import { url } from '../constants.js'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper'

class App extends React.Component {
  state = { message: '' }

  source = new EventSource(`${url}/stream`)

  componentDidMount () {
    this.source.onmessage = (event) => {
      const channels = JSON.parse(event.data)
      this.props.allChannels(channels)
    }
  }

  deleteChannel = async (event) => {
    event.preventDefault()
    const channelId = event.target.name

    if (window.confirm("Do you want to delete?")) { 
      await request
      .delete(`${url}/channel/${channelId}`)
      .then(() => {
        alert('Successfully deleted')
      })
    }
  }

  render () {
    console.log('this.props test:', this.props)
    const channels = this
      .props
      .channels
      .map(channel => {
        return (
          <div>
            <Link
              key={channel.id}
              to={`/channel/${channel.id}`}>
              <div>
                {channel.name}
                <Button
                  variant="contained"
                  color="primary"
                  name={channel.id}
                  onClick={this.deleteChannel}>
                  delete
                </Button>
              </div>
            </Link>
          </div>
        )
      })

    console.log('channels test:', channels)
    return (
      <main>
        <Grid container spacing={3}>
          <Grid item xs={12} p={2}>
            <Paper p={2}>
              <ChannelForm />
              <UserForm user={this.props.user} />
              {channels}
            </Paper>
          </Grid> 
        </Grid>
      </main>
    )
  }
}

function mapStateToProps (state) {
  return {
    channels: state.channels,
    user: state.user
  }
}

const mapDispatchToProps = {
  allChannels
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App)
