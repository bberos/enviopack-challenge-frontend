import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 65%;
  .purchaseStatusOverlay {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border: 1px solid #b6b6b6;
    border-radius: 5px;
    box-shadow: 2px 1px 8px 1px rgba(0, 0, 0, 0.44);
    -webkit-box-shadow: 2px 1px 8px 1px rgba(0, 0, 0, 0.44);
    -moz-box-shadow: 2px 1px 8px 1px rgba(0, 0, 0, 0.44);
    margin-top: 15px;

    .purchaseStatusContainer {
      padding: 15px;
      h2 {
        font-size: 1.2rem;
      }
      button {
        margin-top: 10px;
      }
    }
  }
`;
