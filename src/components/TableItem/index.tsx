import React from "react";
import { categories } from "../../data/categories";
import { formatDate } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import { Category, TableColumn, TableLine, Value } from "./styles";

type Props = {
  //Não é mais um array de item, e sim, um simples item.
  item: Item;
};
const TableItem = ({ item }: Props) => {
  return (
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>
        <Category color={categories[item.category].color}>
          {categories[item.category].title}
        </Category>
      </TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>
        <Value color={categories[item.category].expense ? "red" : "green"}>
          R$ {item.value}
        </Value>
      </TableColumn>
    </TableLine>
  );
};

export default TableItem;
