import { ADD_CHARACTER } from '../actions/'
import { REMOVE_CHARACTER } from '../actions'
import characters_json from '../data/characters.json'
import {createCharacter } from './helpers'


function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)]
      return heroes
    case REMOVE_CHARACTER:
      heroes = state.filter(item=> item.id !== action.id)
      return heroes
    default:
      return state
  }
}

export default heroes