import React, { useState } from 'react'
import MapGL, { Marker, Popup } from 'react-map-gl'

import './Map.scss'

const Map = props => {
  const _onViewportChange = viewport =>
    setViewPort({ ...viewport, transitionDuration: 1000 })
  const [viewport, setViewPort] = useState({
    width: '100%',
    height: '100vh',
    latitude: 51.5036722984105,
    longitude: -0.09756599223727154,
    zoom: 12
  })

  const places = props.places.map(poi => {
    return (
      <Marker
        key={poi.id}
        latitude={poi.geometry.location.lat}
        longitude={poi.geometry.location.lng}
      >
        <button
          className='PoiButton'
          onClick={() => props.setSelectedResult(poi)}
        >
          <img src={poi.icon} alt={poi.name} />
        </button>
      </Marker>
    )
  })

  const selectedResult = props.selectedResult

  return (
    <MapGL
      {...viewport}
      mapStyle='mapbox://styles/mapbox/dark-v10'
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={_onViewportChange}
    >
      {places}

      {selectedResult && (
        <Popup
          className='Popup'
          onClose={() => {
            props.setSelectedResult('')
          }}
          latitude={selectedResult.geometry.location.lat}
          longitude={selectedResult.geometry.location.lng}
        >
          <h4>{selectedResult.name}</h4>
          <p>Users Rating: {selectedResult.rating} / 5</p>
          <p>{selectedResult.formatted_address}</p>
        </Popup>
      )}
    </MapGL>
  )
}

export default Map
