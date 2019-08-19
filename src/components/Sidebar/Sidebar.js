import React, { Component } from 'react'

import './Sidebar.scss'

export default class Sidebar extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const className = this.props.isOn ? 'Sidebar active' : 'Sidebar'
    return (
      <div className={className}>
        <h3>WHATSAROUNDME</h3>
        <input type='text' />
        <div className='results' />
      </div>
    )
  }
}
