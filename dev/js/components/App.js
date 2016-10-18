import {
  default as React,
  Component,
} from "react";

require('../../scss/style.scss');
import Menu from './Menu';
import GoogleMaps from './GoogleMaps';

const MENU_ITEMS = [{
		id: '1',
		name: 'restaurant'
	}, 
	{
		id: '2',
		name: 'gym'
	}, 
	{
		id: '3',
		name: 'school'
	}, 
]

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
