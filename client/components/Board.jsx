import React from 'react';

class Board extends React.Component {
	constructor(props) {
		super(props);
	}

	generateBoard() {
		const { size } = this.props;
		var color = 'black';
		var row, board = [];

		for (var i = 0; i < 8; i++) {
			row = [];
			for (var j = 0; j < 8; j++) {
				row.push(<a key={`${j}${j}`}>{color}</a>);
				if (color === 'black') {
					color = 'white';
				} else {
					color ='black';
				}
			}
			board.push(<div>{row}</div>);
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