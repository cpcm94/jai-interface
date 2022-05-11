import React, { useState } from 'react'
import { FormControl, InputAdornment } from '@mui/material'
import {
  StyledKeyIcon,
  StyledKeyOffIcon,
  StyledInput,
  StyledLabel,
} from './AuthKeyInput.styles'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const toastConfig = {
  position: 'top-center',
  hideProgressBar: true,
  transition: Slide,
}

export const AuthKeyInput = () => {
  const [authKey, setAuthKey] = useState(
    sessionStorage.getItem('API_Key') ?? ''
  )
  const [lockedInput, setLockedInput] = useState(
    !!sessionStorage.getItem('API_Key')
  )

  const handleKeyChange = (e) => {
    setAuthKey(e.target.value)
  }

  const saveAuthKey = (authKey) => {
    sessionStorage.setItem('API_Key', authKey)
    window.dispatchEvent(new Event('storage'))
    toast.success('API Key Saved', toastConfig)
    setLockedInput(true)
  }

  return (
    <FormControl
      sx={{ width: lockedInput ? '15rem' : '22.5rem', marginRight: '1.5rem' }}
      variant='outlined'
    >
      <StyledLabel>API Key</StyledLabel>
      <StyledInput
        type={lockedInput ? 'password' : 'text'}
        value={authKey}
        disabled={lockedInput}
        onChange={handleKeyChange}
        endAdornment={
          <InputAdornment position='end'>
            {lockedInput ? (
              <StyledKeyIcon onClick={() => setLockedInput(false)}>
                {authKey}
              </StyledKeyIcon>
            ) : (
              <StyledKeyOffIcon onClick={() => saveAuthKey(authKey)}>
                {authKey}
              </StyledKeyOffIcon>
            )}
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
