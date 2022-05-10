import styled from 'styled-components'
import { OutlinedInput, InputLabel } from '@mui/material'
import KeyIcon from '@mui/icons-material/Key'
import { colors } from '../../../colors'
import KeyOffIcon from '@mui/icons-material/KeyOff'

export const StyledKeyIcon = styled(KeyIcon)`
  background-color: ${colors.lightGrey};
  padding: 0.35rem;
  border-radius: 50%;
  margin-right: -7px;
  color: ${colors.orange};
  cursor: pointer;
`

export const StyledKeyOffIcon = styled(KeyOffIcon)`
  background-color: ${colors.lightGrey};
  padding: 0.35rem;
  border-radius: 50%;
  margin-right: -7px;
  color: ${colors.orange};
  cursor: pointer;
`

export const StyledLabel = styled(InputLabel)`
  display: flex;
  align-content: center;
  margin-top: -0.35rem;
`

export const StyledInput = styled(OutlinedInput)`
  height: 2.75rem;
  && {
    border-radius: 50px;
    :hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${colors.blue};
      }
    }
  }
`
