import React, {Component} from 'react';

class formTodo extends Component{

	constructor(props) {
		super(props);
		
		this.state = {
			txtValue: ''
		}
	}

	handleText(e){
		this.setState({
			txtValue: e.target.value
		});
	}

	handleFormSubmit(e){
		e.preventDefault();

		if(!this.state.txtValue) return false;

		this.props.onNewTextAdd(this.state.txtValue);

		this.setState({
			txtValue: ''
		})
	}

	render(){
		
		return(
			<form className="formTodo" onSubmit={this.handleFormSubmit.bind(this)}>
				<div className="each-row">
					<label>Enter text: </label>
					<input type="text" value={this.state.txtValue} onChange={this.handleText.bind(this)} />
				</div>
				<div className="each-row">
					<button className="btn-submit">
						Submit
					</button>
				</div>
			</form>
		)
	}
}

export default formTodo;