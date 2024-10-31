import Screen from "./Screen";
import Cursor from "./Cursor";

export default class TicTacToe {
	/**
	 * This variable indicates the player's turn.
	 */
	public playerTurn: string = "X";

	/**
	 * This variable represents the game's grid.
	 */
	public grid: string[][] = new Array(3).fill(new Array(3).fill(" "));

	/**
	 * This is the cursor to the game's grid.
	 */
	public cursor: Cursor = new Cursor(3, 3);

	/**
	 * This is the default constructor for the tic tac toe
	 * game.
	 */
	constructor() {
		// Initialize a 3x3 tic tac toe grid.
		Screen.initialize(3, 3);
		Screen.setGridLines(true);

		Screen.addCommand('up', "move the cursor up", this.cursor.up.bind(this.cursor));
		Screen.addCommand('down', "move the cursor up", this.cursor.down.bind(this.cursor));
		Screen.addCommand('left', "move the cursor up", this.cursor.left.bind(this.cursor));
		Screen.addCommand("right", "move the cursor up", this.cursor.right.bind(this.cursor));
		Screen.addCommand("x", "should fill the cell with X", () => {
			if (this.playerTurn === "X") {
				Screen.setGrid(this.cursor.row, this.cursor.col, "X");
			}
			this.playerTurn = "O";
			const winner = TicTacToe.checkWin(Screen.grid);
			if (winner) {
				TicTacToe.endGame(winner);
			}
		});
		Screen.addCommand("o", "should fill the cell with O", () => {
			if (this.playerTurn === "O") {
				Screen.setGrid(this.cursor.row, this.cursor.col, "O");
			}
			this.playerTurn = "X";
			const winner = TicTacToe.checkWin(Screen.grid);
			if (winner) {
				TicTacToe.endGame(winner);
			}
		});

		Screen.render();
	}

	

	public static xOrOWin(grid: string[][], xOrO: "X" | "O"): boolean {
		let xOrOHorizontal = grid.some((subArr) =>
			subArr.every((char) => char === xOrO)
		);
		let xOrOVertical = grid.some((subArr, row) =>
			subArr.every((char, col) => grid[col][row] === xOrO)
		);
		let xOrODiagonal = grid.every(
			(subArr, index) => grid[index][index] === xOrO
		);
		let xOrODiagonalReversed = grid.every(
			(subArr, index) => grid[index][subArr.length - index - 1] === xOrO
		);

		return (
			xOrODiagonal || xOrODiagonalReversed || xOrOHorizontal || xOrOVertical
		);
	}

	public static checkWin(grid: string[][]): string | false {
		if (this.xOrOWin(grid, "X")) {
			return "X";
		} else if (this.xOrOWin(grid, "O")) {
			return "O";
		} else if (grid.every((sub) => sub.every((item) => item !== " "))) {
			return "T";
		} else {
			return false;
		}
	}

	public static endGame(winner: string) {
		if (winner === "O" || winner === "X") {
			Screen.setMessage(`Player ${winner} wins!`);
		} else if (winner === "T") {
			Screen.setMessage("Tie game!");
		} else {
			Screen.setMessage("Game Over");
		}

		Screen.render();
		Screen.quit();
	}
};
