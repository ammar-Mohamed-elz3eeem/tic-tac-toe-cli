import Screen from "./Screen";

export default class Cursor {
	/**
	 * This is the number of rows that grid has.
	 */
	private numRows: number = 0;

	/**
	 * This is the number of columns that grid has.
	 */
	private numCols: number = 0;

	/**
	 * This is the row that the cursor points to.
	 */
	public row: number = 0;

	/**
	 * This is the column that the cursor points to.
	 */
	public col: number = 0;

	/**
	 * This is the color of the grid.
	 */
	private gridColor: string = "black";

	/**
	 * This is the color of the cursor.
	 */
	private cursorColor: string = "yellow";

	/**
	 * This is the default constructor for the cursor class.
	 *
	 * @param numRows
	 *     This is the number of rows that the grid has.
	 *
	 * @param numCols
	 *     This is the number of columns that the grid has.
	 */
	constructor(numRows: number, numCols: number) {
		this.numRows = numRows;
		this.numCols = numCols;
	}

	/**
	 * This function resets the background color of the grid cell
	 * to be the same color as grid color.
	 */
	public resetBackgroundColor(): void {
		Screen.setBackgroundColor(this.row, this.col, this.gridColor);
	}

	/**
	 * This function sets the background color of the grid cell
	 * to be the same color as cursor color.
	 */
	public setBackgroundColor(): void {
		Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
	}

	/**
	 * This method fires when the cursor trigger up move.
	 */
	public up(): void {
		this.resetBackgroundColor();
    if (this.row > 0) {
      this.row--;
		}
		this.setBackgroundColor();
  }

	/**
	 * This method fires when the cursor trigger down move.
	 */
	public down(): void {
		this.resetBackgroundColor();
    if (this.row < this.numRows - 1) {
			this.row++;
		}
		this.setBackgroundColor();
  }

	/**
	 * This method fires when the cursor trigger left move.
	 */
	public left(): void {
		this.resetBackgroundColor();
    if (this.col > 0) {
      this.col--;
		}
		this.setBackgroundColor();
  }

	/**
	 * This method fires when the cursor trigger right move.
	 */
	public right(): void {
		this.resetBackgroundColor();
    if (this.col < this.numCols - 1) {
			this.col++;
		}
		this.setBackgroundColor();
  }
};
