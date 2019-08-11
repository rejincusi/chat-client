import React from 'react'
import View from './view'
import { setName } from '../../actions'
import { connect } from 'react-redux'

class UserForm extends React.Component {
  state = { name: '' }

  onSubmit = (event) => {
    event.preventDefault()

    this.props.setName(this.state.name)

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

const mapDispatchToProps = {
  setName
}

export default connect(null, mapDispatchToProps)(UserForm)