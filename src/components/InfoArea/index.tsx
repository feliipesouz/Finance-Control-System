import React from "react";
import {
  Container,
  MonthArea,
  MonthArrow,
  MonthTitle,
  ResumeArea,
} from "./styles";
import { arrowLeft } from "@styled-icons/entypo/ArrowLongLeft";
import { arrowRight } from "@styled-icons/entypo/ArrowLongRight";

type Props = {
  currentMonth: string;
}

const InfoArea = ({currentMonth}: Props) => {
  return (
    <Container>
      <MonthArea>
        <MonthArrow>{arrowLeft}</MonthArrow>
        <MonthTitle>{currentMonth}</MonthTitle>
        <MonthArrow>{arrowRight}</MonthArrow>
      </MonthArea>
      <ResumeArea></ResumeArea>
    </Container>
  );
};

export default InfoArea;
