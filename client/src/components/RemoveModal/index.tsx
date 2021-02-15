import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

import { ToolContext } from '../../context/ToolContext';

import {
  ButtonDeck,
  ModalDescription,
  ModalHeader,
  ModalTitle,
} from './styles';
import Delete from './delete.svg';
import Button, { ButtonColor, ButtonHierarchy, ButtonIcon } from '../Button';

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

interface RemoveModalProps {
  onClose: () => void;
  toolToDelete: ToolData | null;
}

const RemoveModal: React.FC<RemoveModalProps> = ({ onClose, toolToDelete }) => {
  const { deleteTool, loadingManager, setLoadingManager } = useContext(
    ToolContext
  ) as ContextType;
  const [queryMatch, setQueryMatch] = useState<boolean | null>(null);

  const handleDelete = async () => {
    setLoadingManager({
      allTools: false,
      deleteTool: true,
      addTool: false,
    });
    const res: any = await deleteTool(toolToDelete?.id as number);
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

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 27.5rem)');
    setQueryMatch(mql.matches);

    const listener = () => {
      setQueryMatch(mql.matches);
    };

    mql.addEventListener('change', listener);

    return () => mql.removeEventListener('change', listener);
  }, []);

  return (
    <Modal
      isOpen={true}
      style={customStyles}
      shouldCloseOnEsc={!loadingManager.deleteTool}
      shouldCloseOnOverlayClick={!loadingManager.deleteTool}
      onRequestClose={onClose}
    >
      <ModalHeader>
        <ModalTitle>
          <img
            src={Delete}
            alt={'Trash Icon'}
            style={{ marginRight: '0.5rem' }}
          />
          <h4>Remove tool</h4>
        </ModalTitle>
        <Button
          leadingIcon={ButtonIcon.Close}
          btnHierarchy={ButtonHierarchy.Icon}
          callback={() => {
            onClose();
          }}
          disabled={loadingManager.deleteTool}
        />
      </ModalHeader>
      <ModalDescription>
        Are you sure you want to remove <strong>{toolToDelete?.title}</strong>?
      </ModalDescription>
      <ButtonDeck>
        <Button
          btnHierarchy={ButtonHierarchy.Secondary}
          btnColor={ButtonColor.Primary}
          callback={() => {
            onClose();
          }}
          text={'Cancel'}
          disabled={loadingManager.deleteTool}
          customStyles={{ marginRight: `${queryMatch ? '0' : '1rem'}` }}
        />
        <Button
          btnHierarchy={ButtonHierarchy.Primary}
          btnColor={ButtonColor.Danger}
          callback={() => {
            handleDelete();
          }}
          text={'Yes, remove'}
          disabled={loadingManager.deleteTool}
          customStyles={{ marginTop: '1rem' }}
        />
      </ButtonDeck>
    </Modal>
  );
};

export default RemoveModal;
