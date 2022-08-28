import './index.css'
import React from 'react';

class Meme extends React.Component {
    constructor() {
      super()
      this.state = {
        name: "Click here"
      }
    }

    handleClick() {
      this.setState({
        name: "Good boy Nathan"
      })
    }
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
        <span className="App-link" onClick={() => this.handleClick()}>
          {this.state.name}
        </span>
      );
    }
}

export default Meme;