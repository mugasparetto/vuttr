import React, { useContext, useEffect, useState } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
import ReactLoading from 'react-loading';

import GlobalStyle from './styles/global';
import ToolsList from './containers/ToolsList';
import { ToolContext } from './context/ToolContext';
import {
  Container,
  Header,
  StatusMessage,
  StatusContainer,
  Subtitle,
  Title,
} from './styles';
import Toolbar from './containers/Toolbar';

import { getAllTools } from './services/apiService';

import 'react-toastify/dist/ReactToastify.css';
import toastStyle from './styles/toastStyle.module.css';
import AddModal from './components/AddModal';

function App() {
  const { setTools, loadingManager, setLoadingManager, tools } = useContext(
    ToolContext
  ) as ContextType;

  const [hasError, setHasError] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (tools.length === 0) {
      if (loadingManager.allTools === false) {
        setStatusMessage('No tools to display. Try adding one.');
        return;
      }
      setStatusMessage('Loading your tools');
    }
  }, [tools, loadingManager.allTools]);

  //O effect acima é caso o length fique zerado pela deleção de tools.
  //O de baixo está relacionado com vir vazio da API

  useEffect(() => {
    async function getTools() {
      setStatusMessage('Loading your tools');
      const fetchedTools = await getAllTools();
      setLoadingManager({ allTools: false, deleteTool: false, addTool: false });
      if (fetchedTools instanceof Error) {
        setHasError(true);
        setStatusMessage('Something wrong happened. Try again later.');
        toast.error('Something wrong happened. Try again later.');
        return;
      }
      if (fetchedTools.length === 0) {
        setStatusMessage('No tools to display. Try adding one.');
      }
      setTools(fetchedTools);
    }

    getTools();
  }, [setTools, setLoadingManager]);

  useEffect(() => {
    if (addModalOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [addModalOpen]);

  const handleCloseModal = () => {
    setAddModalOpen(false);
  };

  return (
    <Container>
      <Header>
        <Title>VUTTR</Title>
        <Subtitle>Very useful tools to remember</Subtitle>
      </Header>
      <Toolbar
        onAddToolClick={() => {
          setAddModalOpen(true);
        }}
      />
      {(loadingManager.allTools || hasError || !tools.length) && (
        <StatusContainer>
          {loadingManager.allTools && (
            <ReactLoading
              type={'spin'}
              color={'#52575C'}
              width={32}
              height={32}
            />
          )}
          <StatusMessage>{statusMessage}</StatusMessage>
        </StatusContainer>
      )}
      {!loadingManager.allTools && !hasError && tools.length !== 0 && (
        <ToolsList />
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        toastClassName={toastStyle.toastClass}
        className={toastStyle.toastContainer}
      />
      {addModalOpen && <AddModal onClose={handleCloseModal} />}
      <GlobalStyle />
    </Container>
  );
}

export default App;
