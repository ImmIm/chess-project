import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import Piece from './Piece';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux';
import Square from './Square';


function Board() {
  const chessBoard = useSelector((state) => state.chess.chessBoard)
  
  return (
    <DndProvider backend={HTML5Backend}>
    <Box
      display='grid'
      gridTemplateColumns='repeat(8, 1fr)'
      gridTemplateRows={'repeat(8, 1fr)'}
      gap={0}
      sx={{ height: '80vh', aspectRatio: '1/1' }}>
      {chessBoard.map((row, index) => {
        return row.map((piece, index1) => {
          return (
            <Square piece={piece} index={index} index1={index1} key={`${index}${index1}`}></Square>
          );
        });
      })}
    </Box>
    </DndProvider>
  );
}

export default Board;
