import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  .paginate {
    display: flex;
    width: 100%;
    justify-content: center;
    li {
      list-style: none;
      cursor: pointer;
      padding: 4px 4px;
      font-size: 1.1rem;
      border: 1px solid hsl(120, 1%, 13%, 0.5);
    }
  }
  ul.paginate {
    margin: 10px 0px 25px 0px;
    padding: 0px 0px 0px 0px;
  }
  .active {
    background-color: #d0d3d9;
  }
`;
