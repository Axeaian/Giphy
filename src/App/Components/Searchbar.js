import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Searchbar.css'

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
        this.props.handleSubmit(this.state.inputVal);
        this.setState({ inputVal: "" })
    }

    render() {
        return (
            <div className="wrap">
                <h1 className="display-3">Hello</h1>
                <p className="lead">This app allows users to search for any term and returns results from Urban Dictionary and Giphy!</p>
                <hr className="my-2" />
                <p>Enter below to continue</p>
                <form onSubmit={this.Submit}>
                    <input type="text" value={this.state.inputVal} placeholder="Search" onChange={this.handleChange} />
                    <Button color="primary" onClick={this.Submit}>Submit</Button>
                </form>
            </div>
        );
    }
}

export default Searchbar;
