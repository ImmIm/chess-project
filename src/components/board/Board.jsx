
import { Box } from '@mui/system';
import React from 'react';

import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { useSelector } from 'react-redux';
import Square from './Square';


function Board() {
  const chessBoard = useSelector((state) => state.chess.chessBoard)
  const turn = useSelector((state) => state.chess.turn)
  
  return (
    <DndProvider backend={HTML5Backend}>
    <Box
      display='grid'
      gridTemplateColumns='repeat(8, 1fr)'
      gridTemplateRows={'repeat(8, 1fr)'}
      gap={0}
      sx={{ height: '80vh', aspectRatio: '1/1', transform: turn === 'w'? 'none': 'transform: scale(-1, 1)'}}>
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
