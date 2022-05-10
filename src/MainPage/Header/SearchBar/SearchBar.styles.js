import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import { OutlinedInput, InputLabel, FormControl } from '@mui/material'
import { colors } from '../../../colors'

export const StyledFromControl = styled(FormControl)`
  width: 15rem;
  && {
    margin-right: 1.5rem;
  }
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

export const StyledIcon = styled(SearchIcon)`
  padding: 0.35rem;
  margin-right: -7px;
  color: ${colors.orange};
  background-color: ${colors.lightGrey};
  border-radius: 50%;
  cursor: pointer;
`
