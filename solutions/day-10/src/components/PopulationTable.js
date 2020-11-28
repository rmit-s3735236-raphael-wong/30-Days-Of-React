import React, {Component} from 'react'

class PopulationTable extends Component {
    getPopulation(countryEntry, total) {
        const {country, population} = countryEntry
        const percentage = population / total * 100
        const size = percentage
        const barStyle = {
            backgroundColor: '#d2a33c',
            color: '#d2a33c',
            width: size * 350 / 100,
            display: 'block',
            borderRadius: '5px'
        }
        const nothing = '`'
        const bar = (<div style={barStyle}>{nothing}</div>)
        return (
        <tr>
            <td>{country}</td>
            <td className='bar'>{bar}</td>
            <td>{population}</td>
        </tr>
        )
    }

    render() {
        const data = this.props.data
        const [world, ...countries] = data
        const total = world.population
        const populationList = data.map((countryEntry) => this.getPopulation(countryEntry, total))

        return (
        <table className='populationTable'>
            {populationList}
        </table>
        )
    }
}

export default PopulationTable