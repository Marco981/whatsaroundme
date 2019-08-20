import React, { Component } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Map from '../Map/Map'

import './MapContainer.scss'

class MapContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: [],
      sidebarOn: false
    }
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar () {
    this.setState({
      sidebarOn: !this.state.sidebarOn
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
        <Sidebar isOn={this.state.sidebarOn} />
        <Map />
      </div>
    )
  }
}

export default MapContainer
