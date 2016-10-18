import {
  default as React,
  Component,
} from "react";

require('../../scss/style.scss');
import togglePlaces from '../actions/togglePlaces';
import { connect } from 'react-redux';

export default class MenuItem extends Component {
	
	constructor(props) {
		super(props);
	}

	_onClick() {
		dispatch(togglePlaces(this.props.children));
	}

	render() {
    return (
	    <a onClick={() => this._onClick()} className="item">
	      {this.props.children}
	    </a>
		);
	}
}
