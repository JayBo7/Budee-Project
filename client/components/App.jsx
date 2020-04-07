import React from 'react';

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
		
		return (
			<div>
				<div>
					<input type= "text" required onChange={() => this.handleBoardInput(event)}/>
					<input type="button" value="Create Board"/>
				</div>
			</div>
		)
	}
}

export default App;