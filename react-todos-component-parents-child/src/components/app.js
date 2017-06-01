import React, {Component} from 'react';
import FormTodo from './form';
import ListTodos from './listTodos';
import TitleTodos from './titleTodos';

class App extends Component{

	constructor(props) {
		super(props);
		
		this.state = {
			data: []
		}

		this.handleNewText = this.handleNewText.bind(this);
	}

	handleNewText(str){
		
		this.state.data.push(str);

		this.setState({
			data: this.state.data
		})
	}

	render(){
		return(
			<div className="wrapperApp">
				<TitleTodos dataListTodos={this.state.data} />
				<FormTodo onNewTextAdd={this.handleNewText} />
				{/* <FormTodo onNewTextAdd={(text) => this.handleNewText(text)} /> */}
				<ListTodos dataListTodos={this.state.data} />
			</div>
		)
	}
}

export default App;