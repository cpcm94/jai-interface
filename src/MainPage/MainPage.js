import React, { useEffect, useState } from 'react'
import { Header } from './Header/Header'
import { MainWrapper } from './MainWrapper'
import { onSearch } from './onSearch'
import { SearchResults } from './SearchResults/SearchResults'
import { ToastContainer } from 'react-toastify'

export const MainPage = () => {
  const [searchResultData, setSearchResultData] = useState([])
  const [isLoading, setLoading] = useState(false)

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
          onSearch(id, setLoading, setSearchResultData, requestOptions)
        }
      />
      <SearchResults isLoading={isLoading} results={searchResultData} />
      <ToastContainer />
    </MainWrapper>
  )
}
