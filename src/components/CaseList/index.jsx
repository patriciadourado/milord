import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonCase,
  Caso,
  Container,
  InputCase,
  InputTitle,
  Title,
  WrapperCase,
  WrapperListed,
} from "./styles";

function addCaseAction(title, caso) {
  return { type: "ADD_CASE", title, caso };
}
export default function CaseList() {
  const cases = useSelector((state) => state.caso);
  const titles = useSelector((state) => state.title);
  const dispatch = useDispatch();
  var caseTitle, caseText;

  const handleTitleChange = (e) => {
    caseTitle = e.target.value;
  };

  const handleTextChange = (e) => {
    caseText = e.target.value;
  };

  function addCase() {
    dispatch(addCaseAction(caseTitle, caseText));
  }

  return (
    <>
      <Title main>Send your case</Title>
      <Container>
        <WrapperListed>
          {titles.map((titulo, i) => (
            <>
              <Title key={titulo}> {titulo} </Title>
              <Caso key={cases[i]}> {cases[i]} </Caso>
            </>
          ))}
        </WrapperListed>
        <WrapperCase>
          <InputTitle
            type="text"
            placeholder="Case name"
            value={caseTitle}
            onChange={handleTitleChange}
            required
          ></InputTitle>
          <InputCase
            type="text"
            placeholder="Your Case"
            value={caseText}
            onChange={handleTextChange}
            required
          ></InputCase>
          <ButtonCase type="button" alt="Show case" onClick={addCase}>
            Send
          </ButtonCase>
        </WrapperCase>
      </Container>
    </>
  );
}
