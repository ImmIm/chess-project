import React, { useEffect, useRef, useState } from 'react';
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
import { useDrag } from 'react-dnd';
import { DragPreviewImage } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { chessActions } from '../../app/store';

function Piece(props) {
  const didMountRef = useRef(false);
  const possibleMoves = useSelector((state) => state.chess.possibleMoves);
  const selectedLocation = useSelector((state) => state.chess.selectedLocation);

  console.log(selectedLocation);

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'piece',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const dispatch = useDispatch();

  const clickMoveHandler = (e) => {
    const data = possibleMoves.filter((el) => el.to === props.location);
    if (selectedLocation === '') {
      chessActions.changeSelectedLocation({ location: props.location });
    } else if (data.length === 1) {
      dispatch(
        chessActions.makeMove({ from: selectedLocation, to: props.location })
      );
    }
  };

  useEffect(() => {
    if (didMountRef.current) {
      return () => {
        dispatch(
          chessActions.changeSelectedLocation({ location: props.location })
        );
      };
    }
    didMountRef.current = true;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation, isDragging]);

  const generatePiece = (piece) => {
    if (props.empty) {
      return (
        <div
          onClick={clickMoveHandler}
          style={{ width: '100%', height: '100%' }}></div>
      );
    }
    switch (piece.color) {
      case 'b':
        switch (piece.type) {
          case 'r':
            return (
              <div style={{ width: '100%', height: '100%' }}>
                <DragPreviewImage connect={preview} src={bR} />
                <div
                  ref={drag}
                  style={{
                    opacity:
                      isDragging || selectedLocation === props.location
                        ? 0.5
                        : 1,
                  }}>
                  <img src={bR} alt='bR' onClick={clickMoveHandler}></img>
                </div>
              </div>
            );
          case 'n':
            return (
              <div style={{ width: '100%', height: '100%' }}>
                <DragPreviewImage connect={preview} src={bN} />
                <div
                  ref={drag}
                  style={{
                    opacity:
                      isDragging || selectedLocation === props.location
                        ? 0.5
                        : 1,
                  }}>
                  <img src={bN} alt='bN' onClick={clickMoveHandler}></img>
                </div>
              </div>
            );
          case 'b':
            return (
              <div style={{ width: '100%', height: '100%' }}>
                <DragPreviewImage connect={preview} src={bB} />
                <div
                  ref={drag}
                  style={{
                    opacity:
                      isDragging || selectedLocation === props.location
                        ? 0.5
                        : 1,
                  }}>
                  <img src={bB} alt='bN' onClick={clickMoveHandler}></img>
                </div>
              </div>
            );
          case 'q':
            return (
              <div style={{ width: '100%', height: '100%' }}>
                <DragPreviewImage connect={preview} src={bQ} />
                <div
                  ref={drag}
                  style={{
                    opacity:
                      isDragging || selectedLocation === props.location
                        ? 0.5
                        : 1,
                  }}>
                  <img src={bQ} alt='bQ' onClick={clickMoveHandler}></img>
                </div>
              </div>
            );
          case 'k':
            return (
              <div style={{ width: '100%', height: '100%' }}>
                <DragPreviewImage connect={preview} src={bK} />
                <div
                  ref={drag}
                  style={{
                    opacity:
                      isDragging || selectedLocation === props.location
                        ? 0.5
                        : 1,
                  }}>
                  <img src={bK} alt='bN' onClick={clickMoveHandler}></img>
                </div>
              </div>
            );
          case 'p':
            return (
              <div style={{ width: '100%', height: '100%' }}>
                <DragPreviewImage connect={preview} src={bp} />
                <div
                  ref={drag}
                  style={{
                    opacity:
                      isDragging || selectedLocation === props.location
                        ? 0.5
                        : 1,
                  }}>
                  <img src={bp} alt='bp' onClick={clickMoveHandler}></img>
                </div>
              </div>
            );
          default:
            break;
        }
        break;
      case 'w':
        switch (piece.type) {
          case 'r':
            return (
              <div style={{ width: '100%', height: '100%' }}>
                <DragPreviewImage connect={preview} src={wR} />
                <div
                  ref={drag}
                  style={{
                    opacity:
                      isDragging || selectedLocation === props.location
                        ? 0.5
                        : 1,
                  }}>
                  <img src={wR} alt='wR' onClick={clickMoveHandler}></img>
                </div>
              </div>
            );
          case 'n':
            return (
              <div style={{ width: '100%', height: '100%' }}>
                <DragPreviewImage connect={preview} src={wN} />
                <div
                  ref={drag}
                  style={{
                    opacity:
                      isDragging || selectedLocation === props.location
                        ? 0.5
                        : 1,
                  }}>
                  <img src={wN} alt='wN' onClick={clickMoveHandler}></img>
                </div>
              </div>
            );
          case 'b':
            return (
              <div style={{ width: '100%', height: '100%' }}>
                <DragPreviewImage connect={preview} src={wB} />
                <div
                  ref={drag}
                  style={{
                    opacity:
                      isDragging || selectedLocation === props.location
                        ? 0.5
                        : 1,
                  }}>
                  <img src={wB} alt='wN' onClick={clickMoveHandler}></img>
                </div>
              </div>
            );
          case 'q':
            return (
              <div style={{ width: '100%', height: '100%' }}>
                <DragPreviewImage connect={preview} src={wQ} />
                <div
                  ref={drag}
                  style={{
                    opacity:
                      isDragging || selectedLocation === props.location
                        ? 0.5
                        : 1,
                  }}>
                  <img src={wQ} alt='wN' onClick={clickMoveHandler}></img>
                </div>
              </div>
            );
          case 'k':
            return (
              <div style={{ width: '100%', height: '100%' }}>
                <DragPreviewImage connect={preview} src={wK} />
                <div
                  ref={drag}
                  style={{
                    opacity:
                      isDragging || selectedLocation === props.location
                        ? 0.5
                        : 1,
                  }}>
                  <img src={wK} alt='wN' onClick={clickMoveHandler}></img>
                </div>
              </div>
            );
          case 'p':
            return (
              <div style={{ width: '100%', height: '100%' }}>
                <DragPreviewImage connect={preview} src={wp} />
                <div
                  ref={drag}
                  style={{
                    opacity:
                      isDragging || selectedLocation === props.location
                        ? 0.5
                        : 1,
                  }}>
                  <img src={wp} alt='wp' onClick={clickMoveHandler}></img>
                </div>
              </div>
            );
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
