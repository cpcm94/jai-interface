import React from 'react'
import styled from 'styled-components'
import { colors } from '../../colors'

const Message = styled.div`
  padding-top: 2rem;
  font-size: 1.25rem;
  color: ${colors.orange};
  opacity: 0.8;
`

export const StandByMessage = ({
  message = 'Insert your JAI API key and query an ID value to start',
}) => {
  return <Message>{message}</Message>
}
