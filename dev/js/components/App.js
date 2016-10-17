import {
  default as React,
  Component,
} from "react";

require('../../scss/style.scss');
import Menu from './Menu';
import GoogleMaps from './GoogleMaps';

const MENU_ITEMS = ['restaurants', 'gyms', 'coffee shops', 'gas stations']

export default class App extends Component {

	render() {
    return (
	    <div className="ui two column">   
	      <Menu menuItems={MENU_ITEMS} />
				<GoogleMaps />
	    </div>
		);
	}
}
