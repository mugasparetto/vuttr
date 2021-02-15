import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { ToolContext } from '../../context/ToolContext';
import { getFilteredTools } from '../../services/apiService';

import Button, {
  ButtonHierarchy,
  ButtonColor,
  ButtonIcon,
} from '../../components/Button';
import TagSwitch from '../../components/TagSwitch';
import TextField from '../../components/TextField';
import { Container, SearchBar } from './styles';

interface ToolBarProps {
  onAddToolClick: () => void;
}

const Toolbar: React.FC<ToolBarProps> = ({ onAddToolClick }) => {
  const {
    loadingManager,
    setLoadingManager,
    searchQuery,
    setSearchQuery,
    tagSearch,
    setTools,
  } = useContext(ToolContext) as ContextType;

  const [hadSearch, setHadSearch] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target } = event;

    if (target.value.trim() === '') {
      target.value = '';
    }

    setSearchQuery(target.value);
  };

  const handleSearch = async () => {
    setLoadingManager({
      addTool: false,
      allTools: true,
      deleteTool: false,
    });
    setTools([]);
    setHadSearch(true);
    const data = await getFilteredTools(searchQuery, !tagSearch);
    setLoadingManager({
      addTool: false,
      allTools: false,
      deleteTool: false,
    });
    if (data instanceof Error) {
      toast.error('Something wrong happened. Try again later.');
      return;
    }
    setTools(data);
  };

  const handleBlur = () => {
    if (hadSearch && searchQuery === '') {
      handleSearch();
      setHadSearch(false);
    }
  };

  return (
    <Container>
      <Button
        leadingIcon={ButtonIcon.Add}
        text={'Add tool'}
        disabled={loadingManager.allTools}
        callback={onAddToolClick}
        btnHierarchy={ButtonHierarchy.Primary}
        btnColor={ButtonColor.Primary}
      />
      <SearchBar>
        <TextField
          placeholder={'Search'}
          changeCallback={handleInputChange}
          disabled={loadingManager.allTools}
          message={null}
          id={'searchField'}
          value={searchQuery}
          onEnter={() => {
            handleSearch();
          }}
          onBlur={() => {
            handleBlur();
          }}
        />
        <TagSwitch disabled={loadingManager.allTools} />
      </SearchBar>
    </Container>
  );
};

export default Toolbar;
