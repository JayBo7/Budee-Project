import React from 'react';
import Board from './Board';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			size: 8,
			resize: 0,
			grid: [],
			player1: ['r', 'c'],
			player2: ['b', 'c']
		}
	}

	componentDidMount() {
		this.generateGrid(8);
	}

	handleBoardInput(e) {
		this.setState({
			resize: e.target.value
		})
	}

	handleBoardResize(num) {
		this.setState({
			size: num
		})
		// pass num because setState is async
		this.generateGrid(num);
	}

	generateGrid(num) {
		const { grid, player1, player2 } = this.state;
		var newGrid = [];

		// handle edge cases
		if (num == 3) {
			newGrid = [player1[0], player1[0], player1[0], undefined, undefined, undefined, player2[0], player2[0], player2[0]]
		} else if (num == 2) {
			newGrid = [player1[0], player1[0], player2[0], player2[0]]
		} else {
			for (var i = 0; i < num; i++) {
				for (var j = 0; j < num; j++) {
					if (i <= 1) {
						newGrid.push(player1[0]);
					} else if (i >= num - 2) {
						newGrid.push(player2[0]);
					} else {
						newGrid.push(undefined);
					}
				}
			}
		}

		this.setState({
			grid: newGrid
		})
	}

	render() {
		const { size, grid, resize } = this.state;
		
		return (
			<div>
				<div>
					<input type= "text" required onChange={() => this.handleBoardInput(event)}/>
					<input type="button" value="Create Board" onClick={() => this.handleBoardResize(resize)}/>
				</div>
				<Board size={size} grid={grid}/>
			</div>
		)
	}
}

export default App;