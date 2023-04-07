import {Component} from 'react'

import {v4} from 'uuid'

import WordItem from '../WordItem'

import './index.css'

class CharactersCount extends Component {
  state = {wordList: [], userInput: ''}

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onAddWord = event => {
    event.preventDefault()
    const {userInput} = this.state

    const newWord = {
      id: v4(),
      word: userInput,
    }
    this.setState(prevState => ({
      wordList: [...prevState.wordList, newWord],
      userInput: '',
    }))
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {wordList, userInput} = this.state
    return (
      <div className="app-container">
        <div className="leftCard-container">
          <h1 className="description">Count the characters like a Boss...</h1>
          {wordList.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="no-input-image"
            />
          ) : (
            <ul>
              {wordList.map(eachWord => (
                <WordItem key={eachWord.id} wordDetails={eachWord} />
              ))}
            </ul>
          )}
        </div>
        <div className="rightCard-container">
          <h1 className="heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.onAddWord}>
            <input
              type="text"
              className="input"
              placeholder="Enter the Characters here"
              value={userInput}
              onChange={this.onChangeUserInput}
            />
            <button className="button" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharactersCount
