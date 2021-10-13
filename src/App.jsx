/* eslint-disable */

import React, { Component } from 'react';
import ChatWindow from './components/ChatWindow';
import { PROJECT_ID, USER_PASSWORD, ADMIN_NAME } from './components/Constants/Authinfo.jsx';

export default class App extends Component {
	constructor(props) {
		super(props);
		const username = localStorage.getItem('username') || ADMIN_NAME;
		localStorage.setItem('username', username);
		this.state = { senderName: ADMIN_NAME };
	}

	setSenderUser = (senderName) => {
		this.setState({ senderName }, () => {
			localStorage.setItem('username', senderName);
			window.location.reload();
		})
	}

	render() {
  		return (
      		<ChatWindow
        		projectID = {PROJECT_ID}
     		   	userName = {localStorage.getItem('username')}
    	    	userSecret = {USER_PASSWORD}
				setSenderUser = { this.setSenderUser }
     	 	/>
  		);
	}
};
