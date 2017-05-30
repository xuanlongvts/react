import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './index.css';

class TodoApp extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			textValue: '',
			allData: []
		}
	}

	formHandle(e){
		e.preventDefault();

		this.state.allData.push(this.state.textValue);
		this.setState({
			textValue: '',
			allData: this.state.allData
		});
	}

	textHandle(e){
		this.setState({
			textValue: e.target.value
		})
	}

	listItems(){
		const getData = this.state.allData;
		
		return(
			<ul className="listTodos">
				{
					getData.map((item, key) => (
						<li key={key} onClick={() => this.removeItem(key)}>{item}</li>
					))
				}
			</ul>
		)
	}

	removeItem(ele){
		const getData = this.state.allData;
		getData.splice(ele, 1);

		this.setState({
			allData: getData
		})

	}

	render(){
		const getData = this.state.allData;

		return(
			<div className="appTodo">
				<form onSubmit={this.formHandle.bind(this)}>
					<div className="eachRow">
						<label>Name: </label>
						<input type="text" value={this.state.textValue} onChange={this.textHandle.bind(this)}/>
					</div>
				</form>
				{(getData.length > 0) && this.listItems() }
			</div>
		)
	}
}

ReactDom.render(
	<TodoApp />,
	document.getElementById('root')
)
