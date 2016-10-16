import {
  default as React,
  Component,
} from "react";

require('../../scss/style.scss');
import Menu from './Menu';
import GoogleMaps from './GoogleMaps';

export default class App extends Component {

	render() {
    return (
	    <div className="ui two column">   
	      <Menu />
				<GoogleMaps />
	    </div>
		);
	}
}
