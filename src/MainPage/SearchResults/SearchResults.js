import React, { useEffect, useState } from 'react'
import { DotLoader } from 'react-spinners'
import { colors } from '../../colors'
import { DisplayItem } from './DisplayItem/DisplayItem'
import { ResultsTable } from './ResultsTable/ResultsTable'
import { LoaderWrapper, ResultsWrapper, Wrapper } from './SearchResults.styles'
import { StandByMessage } from './StandByMessage'

export const SearchResults = ({ isLoading, results = [], standByMessage }) => {
  const [displayItemId, setDisplayItemId] = useState('')
  const [imageLoading, setImageLoading] = useState(false)

  useEffect(() => {
    if (!results[0]) return

    setDisplayItemId(results[0].id)
  }, [results])

  return (
    <Wrapper>
      {isLoading ? (
        <LoaderWrapper>
          <DotLoader color={colors.orange} loading={isLoading} />
        </LoaderWrapper>
      ) : (
        <>
          {!results[0] ? (
            <StandByMessage message={standByMessage} />
          ) : (
            <ResultsWrapper>
              <DisplayItem
                id={displayItemId}
                imageLoading={imageLoading}
                setImageLoading={setImageLoading}
              />
              <ResultsTable
                results={results}
                setDisplayItemId={setDisplayItemId}
                displayItemId={displayItemId}
                setImageLoading={setImageLoading}
              />
            </ResultsWrapper>
          )}
        </>
      )}
    </Wrapper>
  )
}
