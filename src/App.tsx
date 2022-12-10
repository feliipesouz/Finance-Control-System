import React from "react";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { Body, Container, Header, HeaderText } from "./styles";
import TableArea from "./components/TableArea";
import InfoArea from "./components/InfoArea";

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
        <InfoArea currentMonth={currentMonth}/>
        <TableArea list={filteredList} />
      </Body>
    </Container>
  );
};

export default App;
