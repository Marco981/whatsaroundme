import React, { Component } from 'react'

import './Sidebar.scss'

export default class Sidebar extends Component {
  render () {
    const places = this.props.places.slice(0, 10).map(poi => (
      <li onClick={() => this.props.setSelectedResult(poi)} key={poi.id}>
        {poi.name}
      </li>
    ))
    const className = this.props.isOn ? 'Sidebar active' : 'Sidebar'
    return (
      <div className={className}>
        <h3>WHATSAROUNDME</h3>
        <input
          placeholder='search in London'
          type='text'
          value={this.props.selectedResult}
          onChange={this.props.changeValue}
        />
        <ul className='results'>{places}</ul>
      </div>
    )
  }
}
