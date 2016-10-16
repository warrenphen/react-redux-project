import {
  default as React,
  Component,
} from "react";

require('../../scss/style.scss');

export default class Menu extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
    return (
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
		);
	}
}
