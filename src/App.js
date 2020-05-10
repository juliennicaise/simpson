import React from 'react';
import axios from "axios"
import Quotes from "./Components/quotes"

const baseCharacter = {
  character: 'Moe Szyslak',
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411",
  quote: "Well, I'm better than dirt. Well, most kinds of dirt. I mean not that fancy store bought dirt. That stuffs loaded with nutrients. I.. I can't compete with that stuff."
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson : baseCharacter
    };
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpson: data[0],
        });
    });
  }

  render () {
    return (
      <div className="App">
        <Quotes simpson={this.state.simpson} />
        <button type="button" onClick={this.getNewQuote}>Get a Quote !</button>
      </div>
    );
  } 
}

export default App;