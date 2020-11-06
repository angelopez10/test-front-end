import styled from "styled-components";

export const Card = styled.div`
  border-radius: 4px;
  flex-grow: 1;
  flex-shrink: 1;
  box-shadow: 2px 2px 5px #999;
  width: 70%;
  padding: 40px;
  background-color: #6851d8;
  margin: 20px;
  color: #ffff;

  ${(props) =>
    props.secondary &&
    `
    background-color: #aea8a8
    `}
`;
