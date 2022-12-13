import React from "react";
import { categories } from "../../data/categories";
import { Item } from "../../types/Item";
import {
  Button,
  Container,
  Input,
  InputLabel,
  InputTitle,
  Select,
} from "./styles";

type Props = {
  onAdd: (item: Item) => void;
};

const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = React.useState("");
  const [categoryField, setCategoryField] = React.useState("");
  const [titleField, setTitleField] = React.useState("");
  const [valueField, setValueField] = React.useState(0);
  let categoryKeys: string[] = Object.keys(categories);
  const handleAddEvent = () => {};

  return (
    <Container>
      <InputLabel>
        <InputTitle>Data</InputTitle>
        <Input
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>Categoria</InputTitle>
        <Select
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </Select>
      </InputLabel>
      <InputLabel>
        <InputTitle>Título</InputTitle>
        <Input
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>Valor</InputTitle>
        <Input
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>&nbsp;</InputTitle>
        <Button onClick={handleAddEvent}>Adicionar</Button>
      </InputLabel>
    </Container>
  );
};

export default InputArea;
