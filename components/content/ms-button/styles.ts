import styled from 'styled-components';
import {INKButtonProps} from './interfaces';
import {media} from "layout/theme";

export const Button = styled.button<INKButtonProps>`
  height: auto;
  padding: 24px 47px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;

  font-weight: 500;
  line-height: 24px;

  ${(props) =>
          props.buttonStyle === 'purple' &&
          `
  background-color: #5956E9;
  color: #FFFFFF;
  border: 0;

  &:hover {
    background-color: #8886FF;
    color: #FFFFFF;
    border: 0;
  }
  `}
  ${(props) =>
          props.buttonStyle === 'white' &&
          `
  background-color: #FFFFFF;
  color: #2522BA;
  border: 0;
  &:hover {
    background-color: #E6E5FF;
  }
  `}
  &:active {
    border: 0;
  }

  &:focus {
    outline: 0;
  }

  ${media.down("xl")} {
  padding: 14px 30px;
  font-size: 14px;
}
`;
