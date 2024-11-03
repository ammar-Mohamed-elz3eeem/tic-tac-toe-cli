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

		Screen.addCommand(
			"up",
			"move the cursor up",
			this.cursor.up.bind(this.cursor)
		);
		Screen.addCommand(
			"down",
			"move the cursor up",
			this.cursor.down.bind(this.cursor)
		);
		Screen.addCommand(
			"left",
			"move the cursor up",
			this.cursor.left.bind(this.cursor)
		);
		Screen.addCommand(
			"right",
			"move the cursor up",
			this.cursor.right.bind(this.cursor)
		);
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

	/**
	 * This method checks if xOrO is winner by checking horizontal
	 * row and vertical column or diagonal or reverse diagonal.
	 *
	 * @param grid
	 *     This is the grid to check for winner in
	 *
	 * @param xOrO
	 *     This is the x or o to check if there is win
	 *     situation there.
	 *
	 * @returns
	 *     a boolean indicating if the given xOrO is winner
	 *     by checking from the grid.
	 */
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

	/**
	 * This method checks for win for x or o in the given
	 * grid that represents the tic tac toe game or if there
	 * is a tie in the game or no player wins yet
	 *
	 * @param grid
	 *     This is the grid that represents the game.
	 *
	 * @returns
	 *     X if x is the winner or O if o is the winner or
	 *     T if there is a tie in the game or false if there
	 *     no winner yet (board not complete yet).
	 */
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

	/**
	 * This method is fired when x or o wins or there is
	 * a tie in the game.
	 *
	 * @param winner
	 *     This is the winner player either x or o.
	 */
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
