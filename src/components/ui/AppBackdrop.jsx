import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../app/store';

export default function AppBackdrop(props) {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(uiActions.toggleLoginBackdrop())
  };
  const backdropStatus = useSelector((state) => state.ui.loginBackdrop);

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropStatus}
        onClick={handleClose}>
            {props.children}
        </Backdrop>
    </>
  );
}
