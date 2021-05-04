import styled from "styled-components";
import {media} from "../../layout/theme";

export const ContainerSubscribe = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 140px auto 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${media.down("lg")} {
    padding: 0 16px;
    align-items: center;
    flex-direction: column;
  }
`
export const CardSubscribeFree = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 680px;
  border-radius: 40px;
  border: 1px solid #E3E6E9;
  padding: 80px 102px 80px 80px;
  display: flex;
  flex-direction: column;
  font-family: "DM Sans", sans-serif;

  button {
    width: 100%;
    margin-top: 109px;
  }

  h2 {
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 64px;
    line-height: 100%;
    color: var(--text-black);
    margin: 0;
  }

  p {
    margin-top: 109px;
    margin-bottom: 0;
    max-width: 318px;
  }

  ${media.down("xl")} {
    padding: 60px 20px;

    button {
      margin-top: 50px;
    }

    h2 {
      font-size: 36px;
    }

    p {
      margin-top: 45px;
    }
  }
`
export const CardSubscribePremium = styled(CardSubscribeFree)`

  background: #5956E9;
  border: unset;

  h2 {
    color: var(--white);
  }

  p {
    color: var(--white);
    margin-top: 45px;
  }
`
