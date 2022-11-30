import React, { Component } from 'react'
import Coin from './Coin'
import { choice } from './helpers'
class Flip extends Component {
    static defaultProps = {
        coins: [{ side: 'head', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
        { side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' }]
    }
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }

    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
    }
    handleClick = (e) => {
        this.flipCoin();
    }
    render() {
        return (<div className='coinContainer'>
            <h1>Lets Flip a coin!</h1>
            <button onClick={this.handleClick}>Flip</button>
            <p>
                Out of {this.state.nFlips} flips, {this.state.nHeads} were Head and {this.state.nTails} were Tail.
            </p>
        </div>)
    }
}
export default Flip;