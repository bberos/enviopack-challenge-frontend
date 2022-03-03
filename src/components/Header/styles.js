import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #212221;
  height: 8vh;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const LeftContainer = styled.div`
  width: 50%;
  text-align: left;
  margin-left: 20px;
  .link {
    text-decoration: none;
    color: #fafafa;
    font-size: 1.1rem;
    transition: all 0.2s;
    &__active {
      text-decoration: none;
      font-weight: 600;
      color: #fafafa;
      font-size: 1.1rem;
    }
  }
`;
export const RightContainer = styled.div`
  /* background-color: orangered; */
  display: flex;
  width: 50%;
  justify-content: right;
  .link {
    margin-right: 20px;
    text-decoration: none;
    color: #fafafa;
    font-size: 1.1rem;
    &__active {
      margin-right: 20px;
      text-decoration: none;
      font-weight: 600;
      color: #fafafa;
      font-size: 1.1rem;
    }
  }
`;
