import React, { Component } from 'react';

function StateToChild(props) {
    return(
        <div>
            <h3>{props.childCount}</h3>
        </div>
    );
}

export default class Estado extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        // setInterval(() => {
        //     this.setState({
        //         count: this.state.count + 1
        //     });
        // }, 1000)
    }
    render() {
        return (
            <div>
                <h2>El State</h2>
                <p>{this.state.count}</p>
                <StateToChild childCount={this.state.count}/>
            </div>
        );
    }
}