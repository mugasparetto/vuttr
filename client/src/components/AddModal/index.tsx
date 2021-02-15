import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

import { ToolContext } from '../../context/ToolContext';

import Add from './AddBlack.svg';

import { ButtonDeck, ModalHeader, ModalTitle, ModalForm } from './styles';

import Button, { ButtonColor, ButtonHierarchy, ButtonIcon } from '../Button';
import TextField, { MessageType, TextFieldProps } from '../TextField';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(37, 40, 43, 0.72)',
    zIndex: 10,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '1rem',
    padding: '1.5rem',
    maxWidth: '42.5rem',
    width: '80%',
  },
};

Modal.setAppElement('#root');

interface AddModalProps {
  onClose: () => void;
}

const AddModal: React.FC<AddModalProps> = ({ onClose }) => {
  const { saveTool, loadingManager, setLoadingManager } = useContext(
    ToolContext
  ) as ContextType;

  const [formData, setFormData] = useState<TextFieldProps[]>([
    {
      id: 'titleField',
      placeholder: 'Title*',
      message: null,
      value: '',
    },
    {
      id: 'linkField',
      placeholder: 'Link*',
      message: null,
      value: '',
    },
    {
      id: 'descField',
      placeholder: 'Description*',
      message: null,
      value: '',
      height: '5.5rem',
    },
    {
      id: 'tagsField',
      placeholder: 'Tags*',
      message: {
        type: MessageType.Helper,
        message: 'Tags must be separated by space',
      },
      value: '',
    },
  ]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newFormData: TextFieldProps[] = [];
    let error = false;

    formData.forEach((input) => {
      const newInput = Object.assign({}, input);
      if (!newInput.value) {
        newInput.message = {
          type: MessageType.Error,
          message: 'Field should not be empty',
        };
        error = true;
      } else {
        newInput.message = null;
      }
      newFormData.push(newInput);
    });

    setFormData(newFormData);

    if (!error) {
      persistTool();
    }
  };

  const persistTool = async () => {
    setLoadingManager({
      allTools: false,
      deleteTool: false,
      addTool: true,
    });

    const [titleField, linkField, descField, tagsField] = formData;

    const httpsVerifier = linkField.value.search('https');
    const httpVerifier = linkField.value.search('http');

    if (httpsVerifier === -1 && httpVerifier === -1) {
      linkField.value = `https://${linkField.value}`;
    }

    const arrayTags = tagsField.value.split(' ');

    const res: any = await saveTool({
      title: titleField.value,
      link: linkField.value,
      description: descField.value,
      tags: arrayTags,
    });

    setLoadingManager({
      allTools: false,
      deleteTool: false,
      addTool: false,
    });

    if (res instanceof Error) {
      toast.error('Something wrong happened. Try again later.');
      return;
    }
    onClose();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;

    if (target.value.trim() === '') {
      target.value = '';
    }

    const newFormData: TextFieldProps[] = Object.assign([], formData);
    const newField = newFormData.filter((input) => input.id === target.id)[0];
    const fieldIndex = newFormData.indexOf(newField);

    newField.value = target.value;
    newFormData[fieldIndex] = newField;

    setFormData(newFormData);
  };

  return (
    <Modal
      isOpen={true}
      style={customStyles}
      shouldCloseOnEsc={!loadingManager.addTool}
      shouldCloseOnOverlayClick={!loadingManager.addTool}
      onRequestClose={onClose}
    >
      <ModalHeader>
        <ModalTitle>
          <img src={Add} alt={'Add Icon'} style={{ marginRight: '0.5rem' }} />
          <h4>Add new tool</h4>
        </ModalTitle>
        <Button
          leadingIcon={ButtonIcon.Close}
          btnHierarchy={ButtonHierarchy.Icon}
          callback={() => {
            onClose();
          }}
          disabled={loadingManager.addTool}
        />
      </ModalHeader>
      <ModalForm onSubmit={handleFormSubmit}>
        {formData.map((input) => (
          <TextField
            placeholder={input.placeholder}
            changeCallback={handleInputChange}
            disabled={loadingManager.addTool}
            message={input.message}
            id={input.id}
            value={input.value}
            key={input.id}
            height={input.height}
          />
        ))}
        <ButtonDeck>
          <Button
            text="Add tool"
            btnHierarchy={ButtonHierarchy.Primary}
            btnColor={ButtonColor.Primary}
            disabled={loadingManager.addTool}
            callback={() => {}}
          />
        </ButtonDeck>
      </ModalForm>
    </Modal>
  );
};

export default AddModal;
