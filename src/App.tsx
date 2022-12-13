import React from "react";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { Body, Container, Header, HeaderText } from "./styles";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";
import { categories } from "./data/categories";
import InputArea from "./components/InputArea";

const App = () => {
  const [list, setList] = React.useState(items); //Lista geral, de todos os meses.
  const [filteredList, setFilteredList] = React.useState<Item[]>([]); //Lista filtrada com os items do mês atual.
  const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth()); //Pega o mês atual;
  const [income, setIncome] = React.useState(0); //Rendas 
  const [expense, setExpense] = React.useState(0); //Despesas

  React.useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  //Essa função recalcula o que é receita e despesa.
  React.useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

 

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>
      <Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea/>
        <TableArea list={filteredList} />
      </Body>
    </Container>
  );
};

export default App;
