import {
  default as React,
  Component,
} from "react";

require('../../scss/style.scss');

export default class MenuItem extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
    return (
	    <a className="item">
	      {this.props.children}
	    </a>
		);
	}
}
