import Layout from '../components/MyLayout.js';
import React, { Component } from 'react';
import axios from 'axios'


export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'andy',
      response: ''
    };
    this.onButtonpress = this.onButtonpress.bind(this)
  }

  onButtonpress() {
    console.log('button clicked')
    this.callApi()
  }
  callApi = () => {
    axios.get(`/hello/${this.state.name}`, {
    })
      .then(res => {
        console.log(res)
        this.setState({ response: res.data.hello })
      })
      .catch(err => {
        console.log(err)
      })
      .then(w => {
      //  console.log('something else')
      })
  }

  render() {
    return (
      <Layout>
        <h1>Hello {this.state.response}</h1>
        <button onClick={this.onButtonpress}>
          Click me
        </button>
      </Layout>

    );
  }
}
