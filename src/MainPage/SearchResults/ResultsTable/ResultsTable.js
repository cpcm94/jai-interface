import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from '@mui/material'
import { colors } from '../../../colors'
import {
  StyledTableContainer,
  TableLabel,
  TableWrapper,
} from './ResultsTable.styles'

export const ResultsTable = ({
  results,
  displayItemId,
  setDisplayItemId,
  setImageLoading,
}) => {
  const [tablePage, setTablePage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setTablePage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setTablePage(0)
  }

  return (
    <TableWrapper>
      <TableLabel>Similar items to ID: {results[0].id}</TableLabel>
      <StyledTableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
              <TableCell align='right' sx={{ fontWeight: 'bold' }}>
                Distance
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results
              .slice(
                tablePage * rowsPerPage,
                tablePage * rowsPerPage + rowsPerPage
              )
              .map((result) => (
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
      <TablePagination
        component='div'
        rowsPerPage={rowsPerPage}
        page={tablePage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 20, 50]}
        count={results.length}
      />
    </TableWrapper>
  )
}
