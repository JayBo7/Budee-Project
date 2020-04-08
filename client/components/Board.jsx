import React from 'react';

class Board extends React.Component {

	generateBoard() {
		const { size, grid } = this.props;
		const tile = {'black': 'images/square-24b', 'white': 'images/square-24'}
		const pieces = {'b': '-bc', 'r': '-rc'}
		var color = 'black';
		var piece;
		var row, board = [];

		// loop through N
		for (var i = 0; i < size; i++) {
			row = [];
			for (var j = 0; j < size; j++) {
				if (grid[i*size+j]) {
					row.push(<img src={`${tile[color]}${pieces[grid[i*size+j]]}.png`} key={`${i*size+j}b`} />)
				} else {
					row.push(<img src={`${tile[color]}.png`} key={`${i*size+j}`} />);
				}
				// alternate colors
				if (color === 'black') {
					color = 'white';
				} else {
					color ='black';
				}
			}
			board.push(<div className='row' key={`${i}`}>{row}</div>);
			//handle cases where N is even to have an alternating board
			if (size % 2 === 0) {
				if (color === 'black') {
					color = 'white';
				} else {
					color ='black';
				}
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