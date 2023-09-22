import { Header } from "../../Components/Header"
import { Summary } from "../../Components/Summary"
import { TransactionsContainer, TransactionsTable } from "./styles"

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/22</td>
          </tbody>

          <tbody>
            <td>Hamburger</td>
            <td>-R$ 58,00</td>
            <td>Alimentação</td>
            <td>10/04/22</td>
          </tbody>

          <tbody>
            <td>Aluguel Apartamento</td>
            <td>-R$ 1.200,00</td>
            <td>Casa</td>
            <td>27/03/22</td>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}