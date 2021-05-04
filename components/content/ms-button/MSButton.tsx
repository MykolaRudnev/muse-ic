import React, { FunctionComponent } from 'react';

import { INKButtonProps } from './interfaces';
import { Button } from './styles';

export const MSButton: FunctionComponent<INKButtonProps> = ({ buttonStyle, text, }) => {
  return <Button buttonStyle={buttonStyle} text={text}>{text}</Button>
};
