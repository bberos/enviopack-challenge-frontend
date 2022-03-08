import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 20rem;
  margin-bottom: 15px;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 2px 1px 8px 1px rgba(0, 0, 0, 0.44);
  -webkit-box-shadow: 2px 1px 8px 1px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 2px 1px 8px 1px rgba(0, 0, 0, 0.44);

  .image {
    width: 15vw;
  }
  .title {
    width: 80%;
    font-size: 1.3rem;
  }
  .price {
    font-size: 1.25rem;
  }
`;
export const Button = styled.button`
  width: 80%;
  height: 2rem;
  cursor: pointer;
  background-color: #212221;
  border: none;
  border-radius: 5px;
  color: #eef4f5;
  letter-spacing: 0.5px;
  transition: all 0.4s;
  &:hover {
    background-color: #000;
  }
`;
