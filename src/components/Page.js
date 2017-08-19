import React, {Component} from 'react'
import {QueryRenderer, graphql, commitMutation, createFragmentContainer, createRefetchContainer} from 'react-relay'
  
class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {}    
  }
  componentWillMount() {
  }
  componentDidMount() {
  }
  
  render() {
    console.log('RENDER')
    return <div>Test Page</div>
  } 
}

export default Page