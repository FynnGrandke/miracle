import React from 'react';
import { Playfield } from './Playfield';


interface State {
  activeRow: number;
  coordinateX: number;
  coordinateY: number;
  numberOfRows: number;
  numberOfColumns: number;
  playfieldDimensions: any;
}

// This class keeps track of the keyboard input and holds map of the blocks
// It also controls if a row should be deleted if full and creates new blocks
export class GameObserver extends React.Component<{}, State> {

  constructor(props) {
    super(props);

    const numberOfRows = 16, numberOfColumns = 10;

    // Creating a plane which holds the position of every block
    const newPlayfieldDimensions = new Array(numberOfRows);
    for (let index = 0; index < newPlayfieldDimensions.length; index++) {
      newPlayfieldDimensions[index] = new Array(numberOfColumns).fill(0);
    }

    this.state = {
      coordinateX: 0,
      coordinateY: 0,
      numberOfRows,
      numberOfColumns,
      activeRow: 0,
      playfieldDimensions: newPlayfieldDimensions
    };

    this.getRowBlocks = this.getRowBlocks.bind(this);

    document.onkeydown = (event) => {
      // Seems like a bug in eslint here ... indents are correct but mistankly showed as an error
      /* eslint-disable indent */
      switch (event.keyCode) {
        // Left
        case 37:
          this.moveLeft();
          break;
        // Up
        case 38:
          // TODO: Implement
          break;
        // Right
        case 39:
          this.moveRight();
          break;
        // Down
        case 40:
          this.moveDown();
          break;
        default:
          break;
      }
    };
    /* eslint-enable indent */
  }

  componentDidMount() {
    this.newBlock();
    this.useIntervall();
  }

  useIntervall() {
    setInterval(() => {
      if (this.state.activeRow === (this.state.numberOfRows - 1) ||
        this.isWayFree(this.state.activeRow + 1, this.state.coordinateX)) {
        this.setBlock(this.state.activeRow + 1, this.state.coordinateX);

        // Casting the row to an array to make it easier to check if it is full
        if (this.getRowBlocks(this.state.activeRow).toString() === new Array(this.state.numberOfColumns).fill(1).toString()) {
          this.emptyRow(this.state.activeRow);
        }

        this.newBlock();
      }
      else {
        this.setState({ activeRow: this.state.activeRow + 1 });
      }
    }, 1000);
  }

  isWayFree(nextRow: number, currentColumn: number) {
    return this.state.playfieldDimensions[nextRow][currentColumn] === 1 ? true : false;
  }

  setBlock(row: number, column: number) {
    const newPlayfieldDimensions = this.state.playfieldDimensions;
    newPlayfieldDimensions[row - 1][column] = 1;

    this.setState({ playfieldDimensions: newPlayfieldDimensions });
  }

  emptyRow(row: number) {
    const newPlayfieldDimensions = this.state.playfieldDimensions;

    // Remove the full row
    newPlayfieldDimensions.splice(row, 1);
    // Add a new empty row
    newPlayfieldDimensions.unshift(new Array(this.state.numberOfColumns).fill(0));

    this.setState({ playfieldDimensions: newPlayfieldDimensions });
  }

  getRowBlocks(row: number): number[] {
    return this.state.playfieldDimensions[row];
  }

  moveLeft() {
    if (this.state.coordinateX > 0) {
      this.setState({ coordinateX: this.state.coordinateX - 1 });
    }
  }

  moveRight() {
    if (this.state.coordinateX < (this.state.numberOfColumns - 1)) {
      this.setState({ coordinateX: this.state.coordinateX + 1 });
    }
  }

  moveDown() {
    if (this.state.activeRow < (this.state.numberOfRows - 1)) {
      this.setState({ activeRow: this.state.activeRow + 1 });
    }
  }

  isBlockStopped() {
    if (this.state.coordinateY === this.state.numberOfRows) {
      return true;
    }
    return false;
  }

  setNumberOfRows(rows: number) {
    this.setState({ numberOfRows: rows });
  }

  newBlock() {
    this.setState({ coordinateX: Math.floor(Math.random() * this.state.numberOfColumns), coordinateY: 0, activeRow: 0 });
  }

  moveRow() {
    this.setState({ coordinateY: this.state.coordinateY + 1 });
  }

  getCoordinates() {
    return [[this.state.coordinateX], [this.state.coordinateY]];
  }

  getXCoordinate() {
    return this.state.coordinateX;
  }

  getYCoordinate() {
    return this.state.coordinateY;
  }

  render() {
    return <Playfield
      activeRow={this.state.activeRow}
      numberOfRows={this.state.numberOfRows}
      numberOfColumns={this.state.numberOfColumns}
      coordinatesXY={this.getCoordinates()}
      getRowLayout={this.getRowBlocks}
    />;
  }
}
