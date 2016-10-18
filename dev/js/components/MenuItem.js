import {
  default as React,
  Component,
} from "react";

require('../../scss/style.scss');
import togglePlaces from '../actions/togglePlaces';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MenuItem extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
    return (
	    <a onClick={() => this.props.togglePlaces(this.props.children)} className="item">
	      {this.props.children}
	    </a>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({togglePlaces: togglePlaces}, dispatch);
}

export default connect(mapDispatchToProps, mapDispatchToProps)(MenuItem);
