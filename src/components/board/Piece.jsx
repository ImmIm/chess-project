import React from 'react';
import bp from '../../assets/figures/bp.png';
import bB from '../../assets/figures/bB.png';
import bN from '../../assets/figures/bN.png';
import bQ from '../../assets/figures/bQ.png';
import bR from '../../assets/figures/bR.png';
import bK from '../../assets/figures/bK.png';
import wp from '../../assets/figures/wp.png';
import wB from '../../assets/figures/wB.png';
import wN from '../../assets/figures/wN.png';
import wQ from '../../assets/figures/wQ.png';
import wR from '../../assets/figures/wR.png';
import wK from '../../assets/figures/wK.png';

function Piece(props) {
  const generatePiece = (piece) => {
    switch (piece.color) {
      case 'b':
        switch (piece.type) {
          case 'r':
            return <img src={bR} alt='bR'></img>;
          case 'n':
            return <img src={bN} alt='bN'></img>;
          case 'b':
            return <img src={bB} alt='bN'></img>;
          case 'q':
            return <img src={bQ} alt='bN'></img>;
          case 'k':
            return <img src={bK} alt='bN'></img>;
          case 'p':
            return <img src={bp} alt='bN'></img>;
          default:
            break;
        }

        break;
      case 'w':
        switch (piece.type) {
            case 'r':
              return <img src={wR} alt='wR'></img>;
            case 'n':
              return <img src={wN} alt='wN'></img>;
            case 'b':
              return <img src={wB} alt='wN'></img>;
            case 'q':
              return <img src={wQ} alt='wN'></img>;
            case 'k':
              return <img src={wK} alt='wN'></img>;
            case 'p':
              return <img src={wp} alt='wN'></img>;
            default:
              break;
          }
  

        break;

      default:
        break;
    }
  };

  return generatePiece(props.piece);
}

export default Piece;
