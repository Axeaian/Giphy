import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dictionary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    displayDefinitions = () => {
        let container = [];
        let i = this.state.count;
        container.push(
            <div key={i} className="box">
                <div className="defhead">{`"${this.props.udDef[i].word}"`}</div>
                <div className="def">Definition</div>
                <p>{this.props.udDef[i].definition}</p>
                <div className="def">Example</div>
                <p>{this.props.udDef[i].example}</p>
            </div>
        )
        return container;
    }

    onClick = () => {
        let i = this.state.count;
        i > 2 || i > this.props.udDef.length ? this.setState({ count: 0 }) : this.setState({ count: this.state.count + 1 })
    }


    render() {
        return (
            <div onClick={this.onClick}>
                {this.displayDefinitions()}
            </div>
        );
    }
}

export default Dictionary;

Dictionary.propTypes = {
    udDef: PropTypes.array.isRequired
}