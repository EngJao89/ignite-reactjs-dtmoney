import Logo from "../../assets/logo.svg"
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="Logo" />

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}