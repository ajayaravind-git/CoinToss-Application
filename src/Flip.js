import React, { Component } from 'react'
class Flip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }

    }
    render() {
        return (<div>
            <h1>Lets Flip a coin!</h1>
            <button>Flip</button>
        </div>)
    }
}
export default Flip;