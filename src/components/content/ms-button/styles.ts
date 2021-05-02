import styled from 'styled-components';
import {INKButtonProps} from './interfaces';

export const Button = styled.button<INKButtonProps>`
  width: 100%;
  height: auto;
  padding: 29px 46px;
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
    background-color: background: #E6E5FF;
  }
  `}
  &:active {
    border: 0;
  }

  &:focus {
    outline: 0;
  }
`;
