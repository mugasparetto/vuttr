import React from 'react';
import { uniqueId } from 'lodash';

import {
  Surface,
  Tag,
  TagsDeck,
  ToolDescription,
  ToolHeader,
  ToolTitle,
} from './styles';

import Link from './link.svg';
import Button, { ButtonIcon, ButtonColor, ButtonHierarchy } from '../Button';

interface ToolProps {
  tool: ToolData;
  removeCallback: () => void;
}

const ToolComponent: React.FC<ToolProps> = ({ tool, removeCallback }) => {
  const { title, link, description, tags } = tool;

  return (
    <Surface>
      <ToolHeader>
        <ToolTitle>
          <a href={link} target="_blank" rel="noreferrer">
            {title} <img src={Link} alt={'Link symbol'} />
          </a>
        </ToolTitle>
        <Button
          leadingIcon={ButtonIcon.Trash}
          btnHierarchy={ButtonHierarchy.Link}
          btnColor={ButtonColor.Danger}
          callback={() => {
            removeCallback();
          }}
          disabled={false}
          text={'Remove'}
        />
      </ToolHeader>
      <ToolDescription>{description}</ToolDescription>
      <TagsDeck>
        {tags.map((tag: string) => {
          return <Tag key={uniqueId()}>{tag}</Tag>;
        })}
      </TagsDeck>
    </Surface>
  );
};

export default ToolComponent;
