import { Item } from "../types/Item";

//Função que pega o mês atual e retorna nesse padrão
export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`; //Soma, pois o mês no javascript começa em 0, e não em 1.
};

export const filterListByMonth = (list: Item[], date: string) => {
  let newItem: Item[] = [];

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(date) &&
      list[i].date.getMonth() === parseInt(date)
    ) {
      newItem.push(list[i]);
    }
  }
  return newItem;
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

const addZeroToDate = (n: number): string => (n < 10 ? `0${n}` : `${n}`);
