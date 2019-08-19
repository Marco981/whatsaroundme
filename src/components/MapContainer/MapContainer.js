import React, { Component } from 'react'
import Sidebar from '../Sidebar/Sidebar'

class MapContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Sidebar />
      </div>
    )
  }
}

export default MapContainer
