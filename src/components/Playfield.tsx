import React from 'react';
import { FieldRow } from './FieldRow';

/* 
  gamePieceBody:
  [1,0,0]                       [0,0,0]                   [0,1,1]
  [1,0,0] -- turn L-piece -->   [1,0,0] -- turn again --> [0,0,1]
  [1,1,0]                       [1,1,1]                   [0,0,1]
*/

interface Props {
  coordinatesXY: any;
  getRowLayout: Function;
  numberOfRows: number;
  numberOfColumns: number;
  activeRow: number;
}

// The playfield which defines the layout
export const Playfield = function Playfield(props: Props) {

  const fieldRows = [];

  for (let rowCounter = 0; rowCounter < props.numberOfRows; rowCounter++) {
    fieldRows.push(
      <FieldRow
        numberOfFields={props.numberOfColumns}
        activeBlockLocation={props.activeRow === rowCounter ? props.coordinatesXY : null}
        rowBlockLayout={props.getRowLayout(rowCounter)}
        currentRow={rowCounter}
        key={rowCounter}
      />
    );
  }

  return (
    <div className="playfield">
      {fieldRows}
    </div>
  );
};
