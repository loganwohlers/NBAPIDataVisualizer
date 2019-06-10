import React from 'react'

import { Lebron, Harden, Giannis, Durant } from '../../assets/PlayerStats'

import { connect } from 'react-redux'

import PracticeVictory from './PracticeVictory'

class PlayerComparison extends React.Component {

    //only worked w/ hardcoded games
    last10 = () => {
        let currYear = this.props.season.year
        let players

        currYear === 2018 ? players = [Lebron, Durant] : players = [Giannis, Harden]

        let twoPlayers = players.map(pl => {
            let currPlayerSeasonGames = pl.player_seasons.find(ps => {
                return ps.year === currYear
            }).games

            let sorted = currPlayerSeasonGames.sort((a, b) => {
                return parseInt(b.date) - parseInt(a.date)
            })

            return sorted.slice(0, 10)
        })
        return twoPlayers
    }

    render() {

        return (
            <div className='ui container center ' >
                <div className='ui item centered'>
                    TEST
                </div>
                {/* <PracticeVictory lines={this.last10()} /> */}
            </div>
        )

    }


}
const mapStateToProps = (state) => {
    return { season: state.currSeason }
}

export default connect(mapStateToProps)(PlayerComparison)



