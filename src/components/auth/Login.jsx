import { Button, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions, uiActions } from '../../app/store'
import { useState } from 'react'

function Login() {

  const dispatch = useDispatch()
  const [userName, setUserName] = useState('');
  const [error, setError] = useState(false);

  const loginHandler = (e) =>{
    e.preventDefault()

    if (userName.trim().length > 0){
      setError(false)
      dispatch(authActions.login(userName))
      dispatch(uiActions.toggleLoginBackdrop())
    }else{
      setError(true)
    }
  }

  return (
    <Container component={'form'} maxWidth={'md'} sx={{zIndex: 1300,  position: 'fixed',top: '30%',  width: '20%', height: '20%', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', boxShadow:  '0.5rem 0.5rem black, -0.5rem -0.5rem #ccc'}}>
    <TextField
          required
          error={error}
          id="outlined-required"
          label="Enter name"
          onChange={(e) => {setUserName(e.target.value)}}
        />
        <Button onClick={loginHandler} type={'submit'}>Submit</Button>
    </Container>
  )
}

export default Login