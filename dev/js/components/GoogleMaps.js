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

const INPUT_STYLE = {
  boxSizing: `border-box`,
  MozBoxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  marginTop: `27px`,
  padding: `0 12px`,
  borderRadius: `1px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
};

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

	componentDidMount() {

		const toronto = new google.maps.LatLng(43.7515, -79.373);

		const map = new google.maps.Map({
      center: TORONTO,
      zoom: 15
    });

 		const request = {
	    location: toronto,
	    radius: '2000',
    	type: ['gym']
  	};
 
		const service = new google.maps.places.PlacesService(map);
		service.nearbySearch(request, this.callback.bind(this));
	}

	callback(results, status) {
		const markers = [];

    if (status != google.maps.places.PlacesServiceStatus.OK) {
      alert(status);
      return;
    }
    for (let result of results) {
    	console.log(result);
    	const marker = {
				position: result.geometry.location
			}
      markers.push(marker);
    }
 
    this.setState({markers: markers});
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


