import React from 'react';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userInput: '',
			list: []
		};
	}

	changeUserInput(input) {
		this.setState({
			userInput: input
		});
	}

	addToList(input) {
		let listArray = this.state.list;
		listArray.push(input);
		this.setState(
			{
				list: listArray,
				userInput: ''
			},
			() => console.log(this.state.list)
		);
	}

	render() {
		return (
			<React.Fragment>
				<h1>{this.props.listName + 's list'}</h1>
				<input
					type="text"
					value={this.state.userInput}
					onChange={(e) => this.changeUserInput(e.target.value)}
				/>
				<button onClick={() => this.addToList(this.state.userInput)}>{'Add ' + this.props.listName}</button>
				<ul>{this.state.list.map((elem) => <li>{elem}</li>)}</ul>
			</React.Fragment>
		);
	}
}

export default ToDoList;
