import React from 'react';

class Board extends React.Component {

	generateBoard() {
		const { size } = this.props;
		var color = 'black';
		var row, board = [];

		for (var i = 0; i < size; i++) {
			row = [];
			for (var j = 0; j < size; j++) {
				row.push(<a key={`${i}${j}`}>{color}</a>);
				if (color === 'black') {
					color = 'white';
				} else {
					color ='black';
				}
			}
			board.push(<div key={`${i}`}>{row}</div>);
			if (color === 'black') {
				color = 'white';
			} else {
				color ='black';
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