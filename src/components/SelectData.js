import React from 'react';

export default class SelectData extends React.Component {

	render() {
		
		return (
			<div>
				<p>{this.props.text ? this.props.text : 'Click here to copy'}</p>
				<input type="text"
				value={'abcd'}
				onClick={(e)=>{e.target ? e.target.setSelectionRange(0, e.target.value.length) : null}}
				/>
			</div>
		);
	}
}
