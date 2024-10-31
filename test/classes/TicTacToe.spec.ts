import { expect } from "chai";
import TicTacToe from "../../src/classes/TicTacToe";

describe("class TicTacToe()", () => {
  let grid: string[][];

  it("should record empty grid as no winner", () => {
    grid = [
			[" ", " ", " "],
			[" ", " ", " "],
			[" ", " ", " "],
    ];
    expect(TicTacToe.checkWin(grid)).to.be.false;
  });

  it("should recognize horizontal wins", () => {
		grid = [
			["X", "X", "X"],
			[" ", " ", " "],
			[" ", " ", " "],
		];
    expect(TicTacToe.checkWin(grid)).to.equal('X');
    
    grid = [
			[" ", " ", " "],
			["O", "O", "O"],
			[" ", " ", " "],
		];
    expect(TicTacToe.checkWin(grid)).to.equal("O");

    grid = [
			[" ", " ", " "],
			[" ", " ", " "],
			["X", "X", "X"],
		];
		expect(TicTacToe.checkWin(grid)).to.equal("X");
	});

  it("should recognize vertical wins", () => {
		grid = [
			["X", " ", " "],
			["X", " ", " "],
			["X", " ", " "],
		];
		expect(TicTacToe.checkWin(grid)).to.equal("X");

		grid = [
			[" ", "O", " "],
			[" ", "O", " "],
			[" ", "O", " "],
		];
		expect(TicTacToe.checkWin(grid)).to.equal("O");

		grid = [
			[" ", " ", "X"],
			[" ", " ", "X"],
			[" ", " ", "X"],
		];
		expect(TicTacToe.checkWin(grid)).to.equal("X");
  });

  it("should recognize diagonal wins", () => {
		grid = [
			["X", " ", " "],
			[" ", "X", " "],
			[" ", " ", "X"],
    ];
		expect(TicTacToe.checkWin(grid)).to.equal("X");

		grid = [
			[" ", " ", "O"],
			[" ", "O", " "],
			["O", " ", " "],
		];
		expect(TicTacToe.checkWin(grid)).to.equal("O");
  });

  it('should recognize ties', function () {
    grid = [['X','O','X'],
            ['X','O','O'],
            ['O','X','O']]

    expect(TicTacToe.checkWin(grid)).to.equal('T');
  });

  it('should recognize if there is no win yet', function () {
    grid = [['X','X',' '],
            ['X','O','O'],
            ['O','X','O']]
    expect(TicTacToe.checkWin(grid)).to.be.false;
  });
});
