import React, { Component } from 'react'
import Coin from './Coin'
import "./Flip.css"
import { choice } from './helpers'
class Flip extends Component {
    static defaultProps = {
        coins: [{ side: 'heads', imgSrc: 'https://qph.cf2.quoracdn.net/main-qimg-9c81a54813716fccd8e3608ab2f51dcf-lq' },
        { side: 'tails', imgSrc: 'https://qph.cf2.quoracdn.net/main-qimg-148ae81e6fe0500e130fb547026a9b26-lq' }]
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
        this.setState(st => {
            let newState = {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
            }

            return newState
        });
    }
    handleClick = (e) => {
        this.flipCoin();
    }
    render() {
        return (<div className='coinContainer'>
            <h1>Lets Flip a coin!</h1>

            {(this.state.currCoin !== null) && (<Coin info={this.state.currCoin} />)}<br></br>
            <button className='clickbutton' onClick={this.handleClick}>Flip</button>
            <p className='coinDetails'>
                Out of {this.state.nFlips} flips, {this.state.nHeads} were Head and {this.state.nTails} were Tail.
            </p>
        </div>)
    }
}
export default Flip;