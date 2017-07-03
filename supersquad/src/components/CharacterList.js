import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCharacterById } from '../actions'

class CharacterList extends Component {
  render() {

    console.log('this.props', this.props)

    return (
      <div><h4>Characters</h4>
        <ul>
          {
            this.props.characters.map(char => {
              return (
                <li key={char.id}>
                  <div>{char.name}</div>
                  <div
                  onClick={()=> this.props.addCharacterById(char.id)}>
                    +
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('state',state)
  return {
    characters: state.characters
  }
}

export default connect(mapStateToProps, { addCharacterById })(CharacterList)