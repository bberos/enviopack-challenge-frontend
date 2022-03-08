import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #d0d3d9;
  width: 95%;
  border-radius: 5px;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 5px;
  .leftContainer {
    display: flex;
    align-items: center;
    .image {
      width: 5vw;
    }
    .title {
      width: 100%;
      font-size: 1.3rem;
      margin-left: 15px;
    }
  }
  .rightContainer {
    display: flex;
    align-items: center;
    .price {
      font-size: 1.25rem;
      margin-right: 15px;
      width: -webkit-fill-available;
    }
    button {
      margin-right: 10px;
    }
  }
`;
