import React from 'react'
import * as request from 'superagent'

class App extends React.Component {
  state = {
    messages: [],
    message: ''
  }
  source = new EventSource('http://localhost:5000/stream')

  componentDidMount  () {
    this.source.onmessage = (event) => {
      const messages = JSON.parse(event.data)
      this.setState({ messages })
    }
  }

  onSubmit = async (event) => {
    event.preventDefault()

    const response = await
    request
      .post('http://localhost:5000/message')
      .send({ message: this.state.message })

      this.setState({ message: ''})
      console.log('response test', response)
  }

  onChange = (event)  =>{
    const { value } = event.target

    this.setState({ message: value })
  }
  render() {
    const messages = this.state.messages.map((message, index) => <p
      key={index}>
      {message}
    </p>)

    const form = 
    <form onSubmit={this.onSubmit}>
      <input
        type='text'
        value={this.state.message} onChange={this.onChange}
       />    
      <button type='submit'>Send</button>
    </form>
    return <main>{form}{messages}</main>
  }
}

export default App