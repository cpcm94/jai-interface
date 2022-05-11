import React from 'react'
import { Image, ImageWrapper } from './DisplayItem.styles'
import { DotLoader } from 'react-spinners'
import { colors } from '../../../colors'

export const DisplayItem = ({ id, imageLoading, setImageLoading }) => {
  return (
    <ImageWrapper>
      {imageLoading && (
        <DotLoader color={colors.orange} loading={imageLoading} />
      )}
      <Image
        src={`${process.env.REACT_APP_IMAGES_ENDPOINT}${id}.jpg`}
        onLoad={() => setImageLoading(false)}
        isLoading={imageLoading}
        alt='item'
      />
    </ImageWrapper>
  )
}
