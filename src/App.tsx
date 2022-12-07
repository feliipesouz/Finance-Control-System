import React from "react";
import TableArea from "./components/TableArea";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { Body, Container, Header, HeaderText } from "./styles";
import { Item } from "./types/Item";

const App = () => {
  const [list, setList] = React.useState(items); //Lista geral, de todos os meses
  const [filteredList, setFilteredList] = React.useState<Item[]>([]); //Lista filtrada
  const [currentMonth, setCurrentMonth] = React.useState(getCurrentMonth()); //Pega o mês atual;

  React.useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>
      <Body>
        <TableArea list={filteredList}/>
      </Body>
    </Container>
  );
};

export default App;
