import React from 'react';
import request from 'request';
import bluebird from 'bluebird';

export default class AutoDetectLocation extends React.Component {

	constructor () {
		super();
	}


	parseData = (data, parse_field) => {

		var result = data.filter(function( obj ) {
		  return obj.types[0] == parse_field;
		});
		return result[0].long_name;

	};


	getLocation = () => {
		var self = this;
		if (navigator.geolocation) {
		  console.log('Geolocation is supported!');
		}
		else {
		  console.log('Geolocation is not supported for this Browser/OS version yet.');
		}
		var startPos;
	  	var geoSuccess = function(position) {
		    startPos = position;
  			var location_url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + startPos.coords.latitude + ',' + startPos.coords.longitude + "&key=AIzaSyCEHTLb4quK5SdUpMAhEBgmyzSaDg8l3AU";
    		return new bluebird( (resolve, reject) => {
	      	
		      	request.get(
		        {
		          url: location_url,
		          json: true,
		          withCredentials: false
		        },
		        (err, response, body) => {
		          if(err){
		            return reject(err);
		          }
		          if(response.statusCode >= 400){
		            return reject(body);
		          }
		          else {
		          console.log("The address is " + body.results[0]);
		          var country = self.parseData(body.results[0].address_components, 'country');
		          var postal_code = self.parseData(body.results[0].address_components, 'postal_code');
		          return resolve(body);
		          }
		        }

	      		);
	      	});
	  	};

  		navigator.geolocation.getCurrentPosition(geoSuccess);
	    return false;
		
	};

	render() {
		return (
			<div id="use-location">
				<div className="location-icon pull-left"/>
            	<a  href="javascript:void(0)" className="link-text pull-left" onClick={this.getLocation}>Automatically detect my location</a>
            </div>
		);
	}
}



