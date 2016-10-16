import {
  default as React,
  Component,
} from "react";

require('../../scss/style.scss');

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  SearchBox,
  searchNearby,
  PlacesService
} from "react-google-maps";

const TORONTO = {lat: 43.7615, lng: -79.383};

const Maps = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={TORONTO}
  >
 {props.markers.map(marker => (
      <Marker
        {...marker}
      />
    ))}

  </GoogleMap>
));

export default class GoogleMaps extends Component {
	
	constructor(props) {
	super(props);

	  this.state = {
	    markers: [{
	      position: {
	        lat: 43.7615,
	        lng: -79.383,
	      },
	      key: `Toronto`,
	      defaultAnimation: 2,
	    },
	    {
	      position: {
	        lat: 43.7515,
	        lng: -79.373,
	      },
	      key: `asdf`,
	      defaultAnimation: 2,
	    }],
	  };
	}

	render() {
    return (
	      <Maps
	        containerElement={
	          <div style={{backgroundColor: 'black', width: '80%', height: window.innerHeight, float: 'right'}} /> 
	        }
	        mapElement={
	          <div style={{ height: '100%', width: '100%'}} />
	        }
	        markers={this.state.markers}
	      	/>
		);
	}
}


