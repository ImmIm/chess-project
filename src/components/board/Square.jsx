import { Box } from '@mui/material';
import React from 'react';
import { useDrop } from 'react-dnd';
import Piece from './Piece';
import { useDispatch, useSelector } from 'react-redux';
import { canMove, chessActions } from '../../app/store';

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function Square(props) {
  const x = letters[props.index1];
  const y = 8 - props.index;
  const dispatch = useDispatch();
  const possibleMoves = useSelector((state) => state.chess.possibleMoves);
  const selectedLocation = useSelector((state) => state.chess.selectedLocation);
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: 'piece',
      drop: () =>
        dispatch(chessActions.makeMove({ from: selectedLocation, to: x + y })),
      canDrop: () => canMove(x + y, possibleMoves),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [x, y]
  );

  return (
    <Box
      gridRow={props.index + 1}
      gridColumn={props.index1 + 1}
      key={props.index + props.index1}
      ref={drop}
      sx={{
        aspectRatio: '1/1',
        border: '1px solid black',
        backgroundColor:
          (props.index + 1 + props.index1 + 1) % 2 === 0
            ? '#f0d9b5'
            : '#b59963',
      }}>
      {props.piece === null ? (
        <Piece empty={true} isOver={isOver} canDrop={canDrop}></Piece>
      ) : (
        <Piece
          empty={false}
          isOver={isOver}
          canDrop={canDrop}
          piece={props.piece}
          location={props.piece.square}></Piece>
      )}
    </Box>
  );
}

export default Square;
