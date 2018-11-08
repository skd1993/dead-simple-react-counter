import React, { Component } from 'react';
import { Button, Heading, Columns, Section, Container, Hero } from "react-bulma-components/full"
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement() {
    if(this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  reset() {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <Section>
        <Container>
          <Heading size={1}>Dead Simple Counter App Using React</Heading>
          <Columns>
            <Columns.Column size={4}>
              <Button onClick={this.increment} className="full-width" color="success" size="large" rounded outlined>+1</Button>
            </Columns.Column>
            <Columns.Column size={4}>
              <Button onClick={this.decrement} className="full-width" color="danger" size="large" rounded outlined>-1</Button>
            </Columns.Column>
            <Columns.Column size={4}>
              <Button onClick={this.reset} className="full-width" color="danger" size="large" rounded outlined>Reset</Button>
            </Columns.Column>
          </Columns>
        </Container>
        <Container>
          <Heading>
            The Current Count is: {this.state.count}
          </Heading>
        </Container>
      </Section>
    );
  }
}

export default App;
