import React from 'react';
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 41.712915, lng: -70.082128 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 41.712915, lng: -70.082128 }} />
      )}
    </GoogleMap>
  ))
);

export default Map;
