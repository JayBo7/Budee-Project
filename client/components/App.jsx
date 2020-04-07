import React from 'react';
import Board from './Board';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			size: 8
		}
	}

	handleBoardInput(e) {
		this.setState({
			size: e.target.value
		})
	}

	render() {

		const { size } = this.state;
		
		return (
			<div>
				<div>
					<input type= "text" required onChange={() => this.handleBoardInput(event)}/>
					<input type="button" value="Create Board"/>
				</div>
				<Board size={size} />
			</div>
		)
	}
}

export default App;