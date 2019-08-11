import React from 'react'
import { Route } from 'react-router-dom'
import ChannelList from './components/ChannelList'
import Channel from './components/Channel'

export default class App extends React.Component {
  render () {
    return <div>
      <Route exact path='/' component={ChannelList} />
      <Route path='/channel/:channelId' component={Channel} />
    </div>
  }
}
