import React, { Component } from 'react'
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 1, name: "Bulbasaur", type: "grass", base_experience: 64 },
      { id: 16, name: "Pidgey", type: "normal", base_experience: 50 },
      { id: 19, name: "Rattata", type: "normal", base_experience: 51 },
      { id: 23, name: "Ekans", type: "poison", base_experience: 58 },
      { id: 41, name: "Zubat", type: "poison", base_experience: 49 },
      { id: 37, name: "Vulpix", type: "fire", base_experience: 60 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 58, name: "Growlithe", type: "fire", base_experience: 70 },
      { id: 66, name: "Machop", type: "fighting", base_experience: 61 },
      { id: 72, name: "Tentacool", type: "water", base_experience: 67 },
      { id: 81, name: "Magnemite", type: "electric", base_experience: 65 },
      { id: 92, name: "Gastly", type: "ghost", base_experience: 62 }
    ]
  }
  render() {
    let hand1 = [];
    let hand2 = [ ...this.props.pokemon];
    while(hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2}/>
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1}/>
      </div>
    )
  }
}

export default Pokegame;