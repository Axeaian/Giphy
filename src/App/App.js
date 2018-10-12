import React, { Component } from 'react';
import Content from './Content';
import Navigation from '../Navigation';
import Searchbar from './Components/Searchbar';
import './App.css';
import Giphfetch from './Giphfetch';
import GiphRand from './GiphRand';

const ud = require('urban-dictionary');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giphs: [],
      randGiph: [],
      searchVal: "",
      udDef: [],
      load: false
    }
  }

  handleSearch = (val) => {
    this.getGiphs(val);
    this.getRandGiphs(val);
    this.getDefinitions(val);
    this.setState({
      searchVal: val,
      load: true
    })
  }

  handleRand = () => {
    // console.log(this.state.searchVal);
    this.getRandGiphs(this.state.searchVal);
  }

  getDefinitions = (word) => {
    ud.term(word).then((result) => {
      this.setState({ udDef: result.entries })
    }).catch((error) => {
      this.setState({ udDef: [] })
      console.error(error.message)
    })
  }

  async getGiphs(val) {
    try {
      const details = await Giphfetch(val);
      this.setState({ giphs: details.data })
    } catch (error) {
      console.error(error);
    }
  }

  async getRandGiphs(val) {
    try {
      const details = await GiphRand(val);
      this.setState({ randGiph: details })
    } catch (error) {
      console.error(error);
    }

  }
  render() {
    return (
      <div>
        <Navigation />
        <Searchbar handleSubmit={this.handleSearch} />
        {this.state.load === false ? null :
          <React.Fragment>
            <Content giphs={this.state.giphs} rand={this.state.randGiph.data} newRand={this.handleRand} udDef={this.state.udDef} />
            {/* <div className="giphDisp" id="gifs">
              <h3>More gifs from Giphy...</h3>
              {this.state.giphs.map((test, i) =>
                <img src={test.images.fixed_width.url} alt={i} key={i} />
              )}
            </div> */}
          </React.Fragment>}
      </div>
    );
  }
}

export default App;