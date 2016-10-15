import {
  default as React,
  Component,
} from "react";

require('../../scss/style.scss');

import {
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 43.7615, lng: -79.383 }}
  />
));

export default class App extends Component {
	render() {
    return (
    	<div className="container">
	    <div className="ui two column">

	      <div className="ui sidebar visible vertical menu" style={{position: 'relative', width: '20%', height: '100%', float: 'left'}}>
		    <a className="item">
		      Restaurants
		    </a>
		    <a className="item">
		      Gas Stations
		    </a>
		    <a className="item">
		      Coffee Shops
		    </a>
		  </div>

		  <div style={{backgroundColor: 'black', width: '80%', height: '100%', float: 'left'}}> 
			<SimpleMapExampleGoogleMap
	        containerElement={
	          <div style={{ height: '100%', width: '100%' }} />
	        }
	        mapElement={
	          <div style={{ height: '700px', width: '100%'}} />
	        }
	      />
	      </div>

	      </div>
	      </div>
		);
	}
}
