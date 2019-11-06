import { FieldSquare } from './FieldSquare';
import React from 'react';

interface Props {
  numberOfFields: number;
  activeBlockLocation: number[][];
  currentRow: number;
  rowBlockLayout: number[];
}

// One row in the game field
export const FieldRow = function FieldRow(props: Props) {
  const fieldSquares = [];

  for (let fieldSquareCounter = 0; fieldSquareCounter < props.numberOfFields; fieldSquareCounter++) {
    fieldSquares.push(
      <FieldSquare
        blockExists={
          props.activeBlockLocation && props.activeBlockLocation[0][0] === fieldSquareCounter ? true : false ||
            props.rowBlockLayout[fieldSquareCounter] === 1 ? true : false
        }
        key={fieldSquareCounter}
      />
    );
  }

  return <div className="fieldRow">{fieldSquares}</div>;
};
