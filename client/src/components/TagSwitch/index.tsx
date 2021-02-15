import React, { useContext } from 'react';

import Off from './off.svg';
import On from './on.svg';

import { ToolContext } from '../../context/ToolContext';
import { Label, Container } from './styles';

interface TagSwitchProps {
  disabled: boolean;
}

const TagSwitch: React.FC<TagSwitchProps> = ({ disabled }) => {
  const { tagSearch, setTagSearch } = useContext(ToolContext) as ContextType;

  const handleSwitch = () => {
    if (!disabled) setTagSearch(!tagSearch);
  };

  return (
    <Container onClick={handleSwitch} disabled={disabled}>
      {tagSearch ? (
        <img src={On} alt={'Toggle enabled'} />
      ) : (
        <img src={Off} alt={'Toggle disabled'} />
      )}
      <Label active={tagSearch}>Search in tags only</Label>
    </Container>
  );
};

export default TagSwitch;
