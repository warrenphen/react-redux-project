import {
  default as React,
  Component,
} from "react";

require('../../scss/style.scss');
import { createStore } from 'redux';
import ToggleReducer from '../reducers/toggle-reducer';
import togglePlaces from '../actions/togglePlaces';

let store = createStore(ToggleReducer);

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  SearchBox,
  searchNearby,
  PlacesService
} from "react-google-maps";

const TORONTO = new google.maps.LatLng(43.7515, -79.373);

const Maps = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
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
	    markers: undefined
	  };
	}

	componentDidMount() {
		store.dispatch(togglePlaces('restaurant'));
		console.log(store.getState(), 'state');
		const map = new google.maps.Map({
      center: TORONTO,
      zoom: 15
    });

 		const request = {
	    location: TORONTO,
	    radius: '2000',
    	type: ['school']
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
    	const marker = {
    		key: result.id,
    		defaultAnimation: 2,
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


