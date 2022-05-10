import { AuthKeyInput } from './AuthKeyInput/AuthKeyInput'
import { HeaderWrapper, Image, InnerWrapper } from './Header.styles'
import { SearchBar } from './SearchBar/SearchBar'
import logo from '../../jai_logo.png'
export const Header = ({ onSearch }) => {
  return (
    <HeaderWrapper>
      <InnerWrapper>
        <AuthKeyInput />
        <SearchBar onSearch={onSearch} />
      </InnerWrapper>
      <Image src={logo} alt='jai logo' />
    </HeaderWrapper>
  )
}
