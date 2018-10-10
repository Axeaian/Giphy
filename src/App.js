import React, { Component } from 'react';
import Searchbar from './Searchbar';
import './App.css';
import Giphfetch from './Giphfetch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphs: []
    }
  }


  componentDidMount() {
    this.getGiphs("hello");
  }

  handleClick = (val) => {
    this.getGiphs(val);
  }

  async getGiphs(val) {
    try {
      const details = await Giphfetch(val);
      this.setState({ giphs: details.data })
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <Searchbar handleSubmit={this.handleClick} />
        <div className="giphDisp">
          {this.state.giphs.map((test, i) =>
            <img src={test.images.fixed_height.url} alt={i} key={i} />
            // console.log(test)
          )}
        </div>
      </div>
    );
  }
}

export default App;
