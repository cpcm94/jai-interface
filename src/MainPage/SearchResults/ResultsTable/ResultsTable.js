import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { colors } from '../../../colors'
import { StyledTableContainer } from './ResultsTable.styles'

export const ResultsTable = ({
  results,
  displayItemId,
  setDisplayItemId,
  setImageLoading,
}) => {
  return (
    <StyledTableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align='right'>Distance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result) => (
            <TableRow
              key={result.id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                cursor: 'pointer',
                ':hover': { backgroundColor: colors.orange },
                backgroundColor:
                  displayItemId === result.id ? colors.orange : 'white',
              }}
              onClick={() => {
                setDisplayItemId(result.id)
                setImageLoading(true)
              }}
            >
              <TableCell component='th' scope='row'>
                {result.id}
              </TableCell>
              <TableCell align='right'>{result.distance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}
