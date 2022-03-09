import styled from "styled-components";
import { media } from "./../../../styles/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 15rem;
  margin-bottom: 15px;
  border: 1px solid #b6b6b6;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 2px 1px 8px 1px rgba(0, 0, 0, 0.44);
  -webkit-box-shadow: 2px 1px 8px 1px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 2px 1px 8px 1px rgba(0, 0, 0, 0.44);
  ${media.desktop} {
    width: 20rem;
  }
  ${media.desktopL} {
    width: 33rem;
  }

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
