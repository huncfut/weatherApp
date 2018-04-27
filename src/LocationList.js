import React, {Component} from 'react'
import {View, Text} from 'react-native'
import LocationView from './LocationView'

class LocationList extends Component {
  state = {stations: []}
  componentDidMount() {
    fetch('http://pomiary.gdmel.pl/rest/stations')
      .then(response => response.json())
      .then(json => this.setState({stations: json.data}))
      .catch(error => console.log(error.message))
  }

  renderLocations() {
    return this.state.stations.map(station => {
        if(station.active) {
          return <LocationView key={station.no} station={station}/>
        }
      }
    )
  }

  render() {
    return (
      <View>
        {this.renderLocations()}
      </View>
    )
  }
}

export default LocationList
