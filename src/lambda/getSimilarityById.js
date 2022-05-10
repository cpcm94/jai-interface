const { authenticate, similaritySearchById, getStatus } = require('jai-sdk')

export async function handler(event) {
  let results
  let success = false
  let statusCode
  let errorMessage

  try {
    authenticate(event.headers.auth)
    await getStatus()
  } catch (error) {
    if (error.response) {
      return {
        statusCode: error.response.data.statusCode,
        body: JSON.stringify({ error: error.response.data.message }),
      }
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      }
    }
  }

  await similaritySearchById(
    'productimages',
    [parseInt(event.queryStringParameters.id)],
    20
  )
    .then((response) => {
      results = response.similarity[0].results
      statusCode = 200
      success = true
    })
    .catch((error) => {
      console.error(error)
      statusCode = error.response.status
      errorMessage = error.response.data.detail
    })
  if (success) {
    return {
      statusCode: statusCode,
      body: JSON.stringify({ results: results }),
    }
  } else {
    return {
      statusCode: statusCode,
      body: JSON.stringify({ error: errorMessage }),
    }
  }
}
