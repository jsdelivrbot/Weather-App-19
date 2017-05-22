import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
		// this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		// We need to go and fetch weather data
	}

	render() {
		return (
			<form
				className="input-group"
				onSubmit= { this.onFormSubmit.bind(this) }
				>
				<input
					onChange={ this.onInputChange.bind(this) }
					placeholder="Get a 5 day forecast in your favorite cities"
					className="form-control"
					value={ this.state.term }
				/>
				<span className="input-group-btn">
					<button
						className="btn btn-secondary"
						>
						Submit
					</button>
				</span>
			</form>
		)
	}
}
