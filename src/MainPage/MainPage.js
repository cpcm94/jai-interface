import React, { useEffect, useState } from 'react'
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

  const requestOptions = {
    method: 'GET',
    headers: {
      Auth: sessionStorage.getItem('API_Key'),
      'Content-Type': 'application-json',
    },
    redirect: 'follow',
  }

  useEffect(() => {
    window.addEventListener('storage', () => {
      requestOptions.headers.Auth = sessionStorage.getItem('API_Key')
    })

    return () =>
      window.removeEventListener('storage', () => {
        requestOptions.headers.Auth = sessionStorage.getItem('API_Key')
      })
  })

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
