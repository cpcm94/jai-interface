import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const toastConfig = {
  position: 'top-center',
  hideProgressBar: true,
  transition: Slide,
}

export const onSearch = (
  id,
  setLoading,
  setSearchResultData,
  requestOptions
) => {
  if (id === '') {
    toast.error('Search cannot be empty', toastConfig)
    return
  }

  setLoading(true)
  fetch(`/.netlify/functions/getSimilarityById?id=${id}`, requestOptions)
    .then((response) => response.json())
    .then((json) => {
      if (json.results) {
        setSearchResultData(json.results)
      } else {
        toast.error(json.error, toastConfig)
        setSearchResultData([])
      }
      setLoading(false)
    })
    .catch((error) => {
      console.log('error', error)
      setLoading(false)
    })
}
