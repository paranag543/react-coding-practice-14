// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    imageResult: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    heads: 0,
    tails: 0,
  }

  onClickToss = () => {
    const {heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)

    let tossImage = ''
    let headCount = heads
    let tailCount = tails

    if (tossResult === 0) {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      headCount += 1
    } else {
      tossImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      tailCount += 1
    }

    this.setState({
      imageResult: tossImage,
      heads: headCount,
      tails: tailCount,
    })
  }

  render() {
    const {imageResult, heads, tails} = this.state
    const totalCount = heads + tails
    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="caption">Heads (or) Tails</p>
          <img src={imageResult} alt="toss result" className="coign-image" />
          <button
            type="button"
            className="button-class"
            onClick={this.onClickToss}
          >
            Toss Coin
          </button>
          <div className="result-div">
            <p className="result">Total: {totalCount}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
