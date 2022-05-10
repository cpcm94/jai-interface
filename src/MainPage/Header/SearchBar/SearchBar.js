import React, { useState } from 'react'
import { InputAdornment } from '@mui/material'
import {
  StyledFromControl,
  StyledIcon,
  StyledInput,
  StyledLabel,
} from './SearchBar.styles'

export const SearchBar = ({ onSearch }) => {
  const [inputText, setInputText] = useState('')

  const handleTextChange = (e) => {
    if (e.target.value === '') setInputText('')
    let value = parseInt(e.target.value, 10)
    if (isNaN(value)) {
      return inputText
    } else {
      value = value >= 0 ? value : 0
      setInputText(value)
    }
  }

  return (
    <StyledFromControl variant='outlined'>
      <StyledLabel>Search</StyledLabel>
      <StyledInput
        type='text'
        inputProps={{ min: '0' }}
        color='primary'
        value={inputText}
        onChange={handleTextChange}
        endAdornment={
          <InputAdornment position='end'>
            <StyledIcon onClick={() => onSearch(inputText)}>
              {inputText}
            </StyledIcon>
          </InputAdornment>
        }
      />
    </StyledFromControl>
  )
}
