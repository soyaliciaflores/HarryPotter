import React from 'react'
import { connect } from 'react-redux'

const AllCards = ({allCharacters}) => (
    <section>
        {/* <h2>Jugadores</h2>
        <div>
          {  allCharacters.map(character =>(
                <article>
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
                <div>
                    <button>Favoritos</button>
                </div>
            </article>
            ))
            }
        </div> */}
    </section>
)
const mapStateToProps = state =>({
    allCharacters: state.allCharacters
})

const mapDispatchToProps =dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AllCards)