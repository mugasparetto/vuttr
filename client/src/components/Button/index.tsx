import React from 'react';
import { ButtonStyle, LeadingIcon } from './styles';

interface ButtonProps {
  leadingIcon?: ButtonIcon;
  callback: () => void;
  disabled: boolean;
  text?: string;
  btnHierarchy: ButtonHierarchy;
  btnColor?: ButtonColor;
  margin?: Object;
}

export enum ButtonHierarchy {
  Primary,
  Secondary,
  Link,
  Icon,
}

export enum ButtonIcon {
  Add = 'Add',
  Trash = 'Trash',
  Close = 'Close',
}

export enum ButtonColor {
  Primary = '#007EFF',
  Danger = '#FB4E4E',
}

const Button: React.FC<ButtonProps> = ({
  leadingIcon,
  callback,
  disabled,
  text,
  btnHierarchy,
  btnColor,
  margin,
}) => {
  return (
    <ButtonStyle
      onClick={callback}
      disabled={disabled}
      btnColor={btnColor}
      btnHierarchy={btnHierarchy}
      style={margin}
    >
      {leadingIcon && (
        <LeadingIcon
          btnIcon={leadingIcon}
          alt={`${leadingIcon.toString()} Symbol`}
          btnHierarchy={btnHierarchy}
        />
      )}
      {text}
    </ButtonStyle>
  );
};

export default Button;
