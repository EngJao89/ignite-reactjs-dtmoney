import { Header } from "../../Components/Header"
import { Summary } from "../../Components/Summary"
import { 
  PriceHighlight, 
  TransactionsContainer, 
  TransactionsTable 
} from "./styles"

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <td>Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">
                R$ 12.000,00
              </PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/22</td>
          </tbody>

          <tbody>
            <td>Hamburger</td>
            <td>
              <PriceHighlight variant="outcome">
                -R$ 58,00
              </PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/22</td>
          </tbody>

          <tbody>
            <td>Aluguel Apartamento</td>
            <td>
              <PriceHighlight variant="outcome">
                -R$ 1.200,00
              </PriceHighlight>
            </td>
            <td>Casa</td>
            <td>27/03/22</td>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}