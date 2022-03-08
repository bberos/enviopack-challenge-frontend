import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: flex-end;
  .text {
    position: absolute;
    font-size: 0.8rem;
    text-transform: uppercase;
    margin-bottom: 4.5em;
    margin-right: 3em;
    color: #808082;
    font-weight: 300;
  }
  .select {
    width: 8rem;
    height: 2rem;
    background-color: #f2f2f2;
    border: 1px solid #d0d3d9;
    border-radius: 2.5px;
    outline: none;
    padding-left: 5px;
  }
`;
