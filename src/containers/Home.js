import React, { Component, PropTypes } from 'react'; 
import styled from 'styled-components';

const Image = styled.img`
	width: 100%;
		
		`;


export default class Home extends Component {
	static propTypes = {};

render () {
	return (
		<div>
		<h1>Hey Val! You're a real life Web Developer, sis, and your React app is live! You're literally amazing. </h1>
		<Image src={require('../assets/hand_on_laptop_copy.jpg')} alt="hand-image"/>
		</div>
		);
	}
}
