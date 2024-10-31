import { expect } from "chai";
import Cursor from '../../src/classes/Cursor';

describe("class Cursor()", () => {
  let cursor: Cursor;

  beforeEach(() => {
    cursor = new Cursor(3, 3);
  });

  it("initializes a 3x3 grid", () => {
    expect(cursor.row).to.eq(0);
    expect(cursor.col).to.eq(0);
  });

  it("should move the cursor down", () => {
    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);

    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([2, 0]);

    cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([2, 0]);
  });

  it("should move the cursor up", () => {
		cursor.up();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);

		cursor.down();
    expect([cursor.row, cursor.col]).to.deep.equal([1, 0]);

		cursor.down();
		cursor.down();
		cursor.down();

		cursor.up();
		cursor.up();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);
	});

  it("should move the cursor right", () => {
		cursor.right();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);

		cursor.right();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);

		cursor.right();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);
	});

	it("should move the cursor left", () => {
		cursor.left();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 0]);

		cursor.right();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 1]);

		cursor.left();
		cursor.left();
		cursor.left();

		cursor.right();
		cursor.right();
		expect([cursor.row, cursor.col]).to.deep.equal([0, 2]);
	});
});
