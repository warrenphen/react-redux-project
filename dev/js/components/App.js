import {
  default as React,
  Component,
} from "react";

require('../../scss/style.scss');

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 43.7615, lng: -79.383 }}
  >
 {props.markers.map(marker => (
      <Marker
        {...marker}
        
      />
    ))}
  </GoogleMap>
));

export default class App extends Component {
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
    }],
  };
}

	componentDidMount() {
		console.log(window.innerHeight);
	}

	render() {
    return (

	    <div className="ui two column">
	      <div className="ui sidebar visible vertical menu" style={{width: '20%', height: '100%', float: 'left'}}>
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

		  
			<SimpleMapExampleGoogleMap
	        containerElement={
	          <div style={{backgroundColor: 'black', width: '80%', height: window.innerHeight, float: 'right'}} /> 
	        }
	        mapElement={
	          <div style={{ height: '100%', width: '100%'}} />
	        }
	        markers={this.state.markers}
	      	/>

	    </div>

		);
	}
}
