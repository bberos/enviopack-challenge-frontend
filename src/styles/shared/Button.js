import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => props.width || "100%"};
  height: 2rem;
  cursor: pointer;
  background-color: ${(props) => props.background || "#212221"};
  background-color: ${(props) => (props.disabled ? "#d3d3d3" : "#212221")};
  border: none;
  border-radius: 5px;
  color: ${(props) => (props.disabled ? "#212221" : "#eef4f5")};
  letter-spacing: 0.5px;
  transition: all 0.4s;
  &:hover {
    background-color: ${(props) => (props.disabled ? "#d3d3d3" : "#000")}#000;
  }
`;
