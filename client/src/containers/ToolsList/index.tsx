import React, { useContext, useState, useEffect } from 'react';
import RemoveModal from '../../components/RemoveModal';
import ToolComponent from '../../components/ToolComponent';

import { ToolContext } from '../../context/ToolContext';

const ToolsList = () => {
  const { tools } = useContext(ToolContext) as ContextType;

  const [removeModalOpen, setRemoveModalOpen] = useState<Boolean>(false);
  const [selectedTool, setSelectedTool] = useState<ToolData | null>(null);

  useEffect(() => {
    if (removeModalOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [removeModalOpen]);

  const handleCloseModal = () => {
    setRemoveModalOpen(false);
  };

  const handleDeleteTool = (tool: ToolData) => {
    setSelectedTool(tool);
    setRemoveModalOpen(true);
  };

  return (
    <div style={{ padding: '2rem 0' }}>
      {tools.map((tool: ToolData) => {
        return (
          <ToolComponent
            key={tool.id}
            tool={tool}
            removeCallback={() => {
              handleDeleteTool(tool);
            }}
          />
        );
      })}
      {removeModalOpen && (
        <RemoveModal onClose={handleCloseModal} toolToDelete={selectedTool} />
      )}
    </div>
  );
};

export default ToolsList;
