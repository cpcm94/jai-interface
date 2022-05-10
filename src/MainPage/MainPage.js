import React, { useState } from 'react'
import { Header } from './Header/Header'
import { MainWrapper } from './MainWrapper'
import { SearchResults } from './SearchResults/SearchResults'

const onSearch = (
  id,
  setLoading,
  setSearchResultData,
  setStandByMessage,
  requestOptions
) => {
  if (id === '') return

  setLoading(true)
  fetch(`/.netlify/functions/getSimilarityById?id=${id}`, requestOptions)
    .then((response) => response.json())
    .then((json) => {
      if (json.results) {
        setSearchResultData(json.results)
      } else {
        setStandByMessage(json.error)
        setSearchResultData([])
      }
      setLoading(false)
    })
    .catch((error) => {
      console.log('error', error)
      setLoading(false)
    })
}

export const MainPage = () => {
  const [searchResultData, setSearchResultData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [standByMessage, setStandByMessage] = useState(null)

  const myHeaders = new Headers()
  myHeaders.append('Auth', sessionStorage.getItem('API_Key'))
  myHeaders.append('Content-Type', 'application-json')

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  return (
    <MainWrapper>
      <Header
        onSearch={(id) =>
          onSearch(
            id,
            setLoading,
            setSearchResultData,
            setStandByMessage,
            requestOptions
          )
        }
      />
      <SearchResults
        isLoading={isLoading}
        results={searchResultData}
        standByMessage={standByMessage}
      />
    </MainWrapper>
  )
}
