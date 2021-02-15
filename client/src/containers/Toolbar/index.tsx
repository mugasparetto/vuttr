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
import { Container, SearchBar, SearchField } from './styles';

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

  const handleSearch = async (query: string) => {
    setLoadingManager({
      addTool: false,
      allTools: true,
      deleteTool: false,
    });
    setTools([]);
    setHadSearch(true);
    const data = await getFilteredTools(query, !tagSearch);
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
      handleSearch('');
      setHadSearch(false);
    }
  };

  const handleSearchClick = () => {
    if (hadSearch) {
      setSearchQuery('');
      handleSearch('');
      setHadSearch(false);
    } else {
      handleSearch(searchQuery);
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
        <SearchField>
          <TextField
            label={''}
            placeholder={'Search'}
            changeCallback={handleInputChange}
            disabled={loadingManager.allTools}
            message={null}
            id={'searchField'}
            value={searchQuery}
            onEnter={() => {
              if (searchQuery !== '') handleSearch(searchQuery);
            }}
            onBlur={() => {
              handleBlur();
            }}
          />
          <Button
            btnHierarchy={ButtonHierarchy.Icon}
            btnColor={ButtonColor.Primary}
            disabled={loadingManager.allTools}
            callback={() => {
              handleSearchClick();
            }}
            leadingIcon={hadSearch ? ButtonIcon.WhiteClose : ButtonIcon.Search}
            customStyles={{
              position: 'absolute',
              top: '1rem',
              right: '0',
              minWidth: '3rem',
              height: '3rem',
              borderRadius: '0 0.5rem 0.5rem 0',
              background: ButtonColor.Primary,
            }}
          />
        </SearchField>
        <TagSwitch disabled={loadingManager.allTools} />
      </SearchBar>
    </Container>
  );
};

export default Toolbar;
