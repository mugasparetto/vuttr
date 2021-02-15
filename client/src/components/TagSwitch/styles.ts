import styled from 'styled-components';

interface ContainerProps {
  disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  margin-left: 1rem;
  @media screen and (max-width: 22.5rem) {
    margin-left: 0;
  }
`;

interface LabelProps {
  active: boolean;
}

export const Label = styled.span<LabelProps>`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: 0.1px;

  color: ${(props) => (props.active ? '#25282b' : '#A0A4A8')};

  margin-left: 0.5rem;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
