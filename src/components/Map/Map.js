import React, { useState } from 'react'
import MapGL, { NavigationControl, GeolocateControl } from 'react-map-gl'
const Map = _ => {
  const geolocateStyle = {
    position: 'absolute',
    right: '8px',
    top: '8px'
  }
  const _onViewportChange = viewport =>
    setViewPort({ ...viewport, transitionDuration: 1000 })
  const [viewport, setViewPort] = useState({
    width: '100%',
    height: 900,
    latitude: 0,
    longitude: 0,
    zoom: 2
  })

  return (
    <MapGL
      {...viewport}
      mapStyle='mapbox://styles/mapbox/dark-v9'
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={_onViewportChange}
    >
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation
      />
    </MapGL>
  )
}

export default Map
