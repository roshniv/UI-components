import React from 'react';

export default class Fbshare extends React.Component {
	constructor () {
		super();
	}

	componentDidMount () {
		window.fbAsyncInit = function() {
			FB.init({
				appId      : '1673058426316101',
				xfbml      : true,
				version    : 'v2.5'
			});
		};

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}

	share = () => {
		FB.ui(
		{
			method: 'feed',
			link: this.props.href,
			mobile_iframe: true,
			name: 'Hello World',
			description: 'description',
			picture: 'http://image.shutterstock.com/display_pic_with_logo/55550/257495116/stock-photo-group-of-business-people-isolated-white-background-257495116.jpg'
		}, function(response){
			console.log(response);
		});
		return false;
	};

	render() {
		return (
			<a className="social fb" target='_blank' onClick={this.share}></a>
			);
	}
}

