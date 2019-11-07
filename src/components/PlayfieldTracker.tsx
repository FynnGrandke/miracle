
// TODO: Unnecessary?
export class PlayfieldTracker {

  // Defining the playfield and it's blocks as plane (in dimensions)
  playfieldDimensions: number[][];

  constructor(numberOfRows: number, numberOfColumns: number) {
    this.playfieldDimensions = new Array(numberOfRows);
    for (let index = 0; index < this.playfieldDimensions.length; index++) {
      this.playfieldDimensions[index] = new Array(numberOfColumns).fill(0);
    }
  }

  setBlock(row: number, column: number) {
    this.playfieldDimensions[row - 1][column] = 1;
  }

  emptyRow(row: number) {
    this.playfieldDimensions[row].fill(0);
  }

  getRowBlocks(row: number): number[] {
    return this.playfieldDimensions[row];
  }
}