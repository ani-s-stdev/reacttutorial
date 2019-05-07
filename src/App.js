import React, {Component} from 'react';
import Table from './Table'
import Form from './Form'
import Game from './Game'

class App extends Component {
    state = {
        characters:  []
    };

    removeCharacter = index => {
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((character, i) => i!==index)
        })
    };

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]})
    };

    render() {
        const {characters} = this.state;
        return (
            <div className="App">
                <h1>Hello React!</h1>
                <div className="container">
                    <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                    <Form handleSubmit={this.handleSubmit}/>
                </div><br />
                <div className="Game">
                    <Game />
                </div>
            </div>
        )
    }
}

export default App;
