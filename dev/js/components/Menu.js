import {
  default as React,
  Component,
} from "react";

require('../../scss/style.scss');
import MenuItem from './MenuItem';

export default class Menu extends Component {
	render() {
		let nextMenuItemId = 0;
		const menuItems = this.props.menuItems.map(menuItem => {
			return <MenuItem key={nextMenuItemId++}>{menuItem.name}</MenuItem>
		});

    return (
	     <div className="ui sidebar visible vertical menu" style={{width: '20%', height: '100%', float: 'left'}}>
	    	{menuItems}
		  </div>
		);
	}
}
