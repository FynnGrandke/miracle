import React from 'react';
import { Playfield } from './Playfield';

interface Props {
  coordinatesXY: any;
  numberOfRows: number;
  numberOfColumns: number;
  activeRow: number;
  getRowLayout: any;
}

// TODO: Unnecessary?
export const MainView = function MainView(props: Props) {

  return (
    <div className="mainView">
      <Playfield
        activeRow={props.activeRow}
        getRowLayout={props.getRowLayout}
        numberOfRows={props.numberOfRows}
        numberOfColumns={props.numberOfColumns}
        coordinatesXY={props.coordinatesXY}
      />
    </div>
  );
};
