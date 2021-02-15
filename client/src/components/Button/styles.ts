import styled from 'styled-components';
import { ButtonHierarchy, ButtonColor, ButtonIcon } from './index';

import Plus from './add.svg';
import Delete from './delete.svg';
import Close from './close.svg';
import WhiteClose from './whiteClose.svg';
import Search from './search.svg';

interface ButtonStyleProps {
  btnHierarchy: ButtonHierarchy;
  btnColor?: ButtonColor;
}

interface LeadingIconProps {
  btnHierarchy: ButtonHierarchy;
  btnIcon: ButtonIcon;
}

const findIcon = (icon: ButtonIcon) => {
  switch (icon) {
    case ButtonIcon.WhiteClose:
      return WhiteClose;
    case ButtonIcon.Search:
      return Search;
    case ButtonIcon.Close:
      return Close;
    case ButtonIcon.Trash:
      return Delete;
    case ButtonIcon.Add:
    default:
      return Plus;
  }
};

export const LeadingIcon = styled.img.attrs(
  ({ btnIcon }: LeadingIconProps) => ({
    src: findIcon(btnIcon),
  })
)`
  margin-right: ${({ btnHierarchy }: LeadingIconProps) =>
    btnHierarchy !== ButtonHierarchy.Icon ? '0.5rem' : '0'};
`;

export const ButtonStyle = styled.button<ButtonStyleProps>`
  font-family: inherit;
  font-size: 0.875rem;

  ${(props) => {
    switch (props.btnHierarchy) {
      case ButtonHierarchy.Icon:
      case ButtonHierarchy.Link:
        return `background-color:transparent;
                    color: ${props.btnColor?.toString()};
                    border: none;
                    height: 100%;
                    padding: 0;`;
      case ButtonHierarchy.Secondary:
        return `background-color:transparent;
                    color: ${props.btnColor?.toString()};
                    border: 0.0625rem solid ${props.btnColor?.toString()};
                    height: 3rem;
                    padding: 1rem;
                    min-width: 9rem;`;
      case ButtonHierarchy.Primary:
      default:
        return `background-color:${props.btnColor?.toString()};
                    color: white;
                    border: none;
                    height: 3rem;
                    padding: 1rem;
                    min-width: 9rem;`;
    }
  }}

  font-weight: 600;
  border-radius: 0.5rem;
  line-height: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  :disabled {
    cursor: auto;
    opacity: 0.4;
  }
`;
