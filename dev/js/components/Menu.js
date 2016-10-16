import {
  default as React,
  Component,
} from "react";

require('../../scss/style.scss');
import MenuItem from './MenuItem';

export default class Menu extends Component {

	constructor(props) {
		super(props);
	}

	render() {
    return (
	     <div className="ui sidebar visible vertical menu" style={{width: '20%', height: '100%', float: 'left'}}>
	    	<MenuItem>Restaurants</MenuItem>
	    	<MenuItem>Gas Stations</MenuItem>
	    	<MenuItem>Coffee Shops</MenuItem>
		  </div>
		);
	}
}
