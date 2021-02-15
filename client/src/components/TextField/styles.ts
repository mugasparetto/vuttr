import styled from 'styled-components';
import { MessageType } from '.';

interface TextInputProps {
  height?: string;
}

export const TextInput = styled.textarea<TextInputProps>`
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.8rem 0 0.8rem 1rem;
  padding-left: 1rem;
  padding-top: 0.8rem;
  border: 0.0625rem solid #a0a4a8;
  height: ${(props) => (props.height ? props.height : '3rem')};
  overflow-x: hidden;
  background-color: white;
  color: #25282b;

  font-family: inherit;

  resize: none;

  flex: 0 0 100%;
  max-width: 100%;

  :focus {
    border-color: #007eff;
  }

  :disabled {
    background: #e8e8e8;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-flow: wrap row;
  position: relative;
  padding: 1rem 0;

  .editing {
    font-weight: 500;
    color: #a0a4a8;
    font-size: 0.75rem;
    transform: translateY(-2.25rem);
  }

  .active {
    color: #007eff;
  }
`;

export const InputLabel = styled.label`
  font-size: 1rem;
  position: absolute;
  left: 1rem;
  color: #cacccf;
  transition: all 0.2s ease;

  top: 2rem;

  z-index: 5;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

interface MessageProps {
  type: MessageType;
}

export const Message = styled.span<MessageProps>`
  font-weight: 600;
  font-size: 0.8125rem;
  line-height: 1rem;
  letter-spacing: 0.2px;

  margin-top: 0.5rem;
  margin-left 1rem;

  color: ${(props) =>
    props.type === MessageType.Error ? '#FB4E4E' : '#52575C'};
`;
