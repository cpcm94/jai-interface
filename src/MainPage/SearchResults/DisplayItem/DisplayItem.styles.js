import styled from 'styled-components'

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  min-height: 400px;
`

export const Image = styled.img`
  width: auto;
  height: 400px;
  box-shadow: 0 0.46875rem 2.1875rem rgb(8 10 37 / 3%),
    0 0.9375rem 1.40625rem rgb(8 10 37 / 15%),
    0 0.25rem 0.53125rem rgb(8 10 37 / 5%),
    0 0.125rem 0.1875rem rgb(8 10 37 / 3%);

  align-self: center;
  display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
`
