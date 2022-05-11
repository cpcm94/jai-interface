import styled from 'styled-components'
import { TableContainer } from '@mui/material'

export const StyledTableContainer = styled(TableContainer)`
  box-shadow: 0 0.46875rem 2.1875rem rgb(8 10 37 / 13%),
    0 0.9375rem 1.40625rem rgb(8 10 37 / 13%),
    0 0.25rem 0.53125rem rgb(8 10 37 / 15%),
    0 0.125rem 0.1875rem rgb(8 10 37 / 13%);
`

export const TableLabel = styled.label`
  align-self: flex-start;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0 0 1rem 0;
`
export const TableWrapper = styled.div`
  width: max(75%, 300px);
  display: flex;
  flex-direction: column;
  align-items: center;
`
