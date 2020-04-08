import React from 'react';

class Board extends React.Component {

	generateBoard() {
		const { size, grid } = this.props;
		const tile = {'black': 'images/square-24b', 'white': 'images/square-24'}
		const pieces = {'b': '-bc', 'r': '-rc'}
		var color = 'black';
		var row, board = [];

		// loop through N
		for (var i = 0; i < size; i++) {
			row = [];
			for (var j = 0; j < size; j++) {
				if (grid[i*size+j]) {
					row.push(<img src={`${tile[color]}${pieces[grid[i*size+j][0]]}.png`} key={`${i*size+j}`} />)
				} else {
					row.push(<img src={`${tile[color]}.png`} key={`${i*size+j}`} />);
				}
				// alternate colors
				color = color === 'black' ? 'white' : 'black';
			}
			board.push(<div className='row' key={`${i}`}>{row}</div>);
			//handle cases where N is even to have an alternating board
			if (size % 2 === 0) {
				color = color === 'black' ? 'white' : 'black';
			}
		}

		return (<div>{board}</div>)
	}

	render() {
		return (
			<div>
				{this.generateBoard()}
			</div>
		)
	}
}

export default Board;