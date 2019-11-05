import React from 'react';

interface Props {
  blockExists: boolean;
}

export const FieldSquare = function FieldSquare(props: Props) {
  return (
    <div className="fieldSquare">
      {props.blockExists ? <div className="block" /> : null}
    </div>
  );
};
