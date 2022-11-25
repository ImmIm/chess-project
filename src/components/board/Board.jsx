import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { Chess } from 'chess.js';
import Piece from './Piece';


const chess = new Chess();
const chessBoard = chess.board();

function Board() {
  return (
    <Box
      display='grid'
      gridTemplateColumns='repeat(8, 1fr)'
      gridTemplateRows={'repeat(8, 1fr)'}
      gap={0}
      sx={{ height: '80vh', aspectRatio: '1/1' }}>
      {chessBoard.map((row, index) => {
        return row.map((piece, index1) => {
          return (
            <Box
              gridRow={index + 1}
              gridColumn={index1 + 1}
              key={index + index1}
              sx={{ aspectRatio: '1/1', border: '1px solid black' }}>
              {piece === null ? null : <Piece piece={piece}></Piece>}
            </Box>
          );
        });
      })}
    </Box>
  );
}

export default Board;
