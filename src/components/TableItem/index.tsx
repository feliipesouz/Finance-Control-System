import React from "react";
import { Categories } from "../../data/categories";
import { formatDate } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import { TableColumn, TableLine } from "./styles";

type Props = {
  //Não é mais um array de item, e sim, um simples item.
  item: Item;
};
const TableItem = ({ item }: Props) => {
  return (
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>{Categories[item.category].title}</TableColumn>{/*Muito útil*/}
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>R$ {item.value}</TableColumn>
    </TableLine>
  );
};

export default TableItem;
