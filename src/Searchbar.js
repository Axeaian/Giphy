import React, { Component } from 'react';

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ""
        }
    }

    handleChange = (e) => {
        this.setState({ inputVal: e.target.value })
    }

    Submit = (e) => {
        e.preventDefault();
        console.log(this.state.inputVal);
        this.props.handleSubmit(this.state.inputVal);
        this.setState({ inputVal: "" })
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.inputVal} placeholder="Search" onChange={this.handleChange} />
                <button onClick={this.Submit}>Submit</button>
            </form>
        );
    }
}

export default Searchbar;
