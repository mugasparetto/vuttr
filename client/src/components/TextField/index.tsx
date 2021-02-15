import React, { useLayoutEffect, useRef } from 'react';
import { InputGroup, TextInput, InputLabel, Message } from './styles';

export interface TextFieldProps {
  label: string;
  changeCallback?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  message: TextFieldMessage | null;
  id: string;
  value: string;
  height?: string;
  onEnter?: () => void;
  onBlur?: () => void;
  placeholder?: string;
}

export enum MessageType {
  Error = 'error',
  Helper = 'helper',
}

export interface TextFieldMessage {
  type: MessageType;
  message: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  changeCallback,
  disabled,
  message,
  id,
  value,
  height,
  onEnter,
  onBlur,
  placeholder,
}) => {
  const inputLabelRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    const { current } = inputRef;

    const handleFocus = () => {
      inputLabelRef.current?.classList.add('active');
      inputLabelRef.current?.classList.add('editing');
    };
    const handleBlur = () => {
      if (current?.value === '') {
        inputLabelRef.current?.classList.remove('editing');
      }
      inputLabelRef.current?.classList.remove('active');
      if (onBlur) onBlur();
    };

    const handleEnter = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (onEnter) onEnter();
      }
    };

    current?.addEventListener('focus', handleFocus);
    current?.addEventListener('blur', handleBlur);
    current?.addEventListener('keydown', handleEnter);

    return () => {
      current?.removeEventListener('focus', handleFocus);
      current?.removeEventListener('blur', handleBlur);
      current?.removeEventListener('keydown', handleEnter);
    };
  }, [onEnter, onBlur]);

  return (
    <InputGroup>
      <InputLabel
        ref={inputLabelRef}
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        {label}
      </InputLabel>
      <TextInput
        ref={inputRef}
        onChange={changeCallback}
        disabled={disabled}
        id={id}
        value={value}
        height={height}
        placeholder={placeholder}
      />
      {message && <Message type={message.type}>{message.message}</Message>}
    </InputGroup>
  );
};

export default TextField;
