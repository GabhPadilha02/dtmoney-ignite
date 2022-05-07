import { useContext } from "react";
import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {

    const transactions = useContext(TransactionsContext)
    console.log(transactions)
    

    return (
        <Container>
            <TransactionsContext.Consumer>
                {(data) => {
                    console.log(data)

                    return <p></p>
                }}
            </TransactionsContext.Consumer>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Income" />
                </header>
                <strong>1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Outcome" />
                </header>
                <strong>- 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>500,00</strong>
            </div>
        </Container>
    )
}