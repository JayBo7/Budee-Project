import React from 'react';

class Board extends React.Component {

	generateBoard() {
		const { size } = this.props;
		const tile = {'black': 'images/square-24b', 'white': 'images/square-24'}
		const pieces = {'black': '-bc', 'red': '-rc', 'no': ''}
		var color = 'black';
		var piece = 'no';
		var row, board = [];

		// loop through N
		for (var i = 0; i < size; i++) {
			row = [];
			for (var j = 0; j < size; j++) {
				// initialize red pieces
				if (i <= 1) {
					piece = 'red'
				}
				// initialize black pieces
				if (i >= size - 2) {
					piece = 'black'
				}
				row.push(<img src={`${tile[color]}${pieces[piece]}.png`} key={`${i}${j}`} />);
				// alternate colors
				if (color === 'black') {
					color = 'white';
				} else {
					color ='black';
				}
			}
			board.push(<div className='row' key={`${i}`}>{row}</div>);
			//handle cases where N is odd to have an alternating board
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