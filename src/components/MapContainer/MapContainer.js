import React, { Component } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Map from '../Map/Map'
import * as poiData from '../../data/pointsOfInterest.json'

import './MapContainer.scss'

class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: [],
      sidebarOn: false,
      selectedResult: '',
      inputValue: ''
    }
    this.toggleSidebar = this.toggleSidebar.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.setSelectedResult = this.setSelectedResult.bind(this)
  }

  toggleSidebar () {
    this.setState({
      sidebarOn: !this.state.sidebarOn
    })
  }

  handleInputChange (e) {
    this.setState({ selectedResult: '' })
    const inputValue = e.target.value
    const results = poiData.features
    const regex = new RegExp(inputValue, 'gi')
    const matches = results.filter(result => {
      return result.name.match(regex)
    })
    this.setState({ inputValue: e.target.value, results: matches })
  }

  setSelectedResult (poi) {
    this.setState({ selectedResult: poi, sidebarOn: false })
  }

  componentDidMount () {
    this.setState({
      results: poiData.features
    })
  }

  render () {
    return (
      <div className='MapContainer'>
        <div className='menu' onClick={this.toggleSidebar}>
          <span className='menu__item' />
          <span className='menu__item' />
          <span className='menu__item' />
        </div>
        <Sidebar
          inputValue={this.state.inputValue}
          changeValue={this.handleInputChange}
          places={this.state.results}
          isOn={this.state.sidebarOn}
          setSelectedResult={this.setSelectedResult}
        />
        <Map
          selectedResult={this.state.selectedResult}
          places={this.state.results}
          setSelectedResult={this.setSelectedResult}
        />
      </div>
    )
  }
}

export default MapContainer
