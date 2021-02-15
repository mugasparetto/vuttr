import React, { createContext, useState } from 'react';
import { addToolDb, deleteToolDb } from '../services/apiService';

export const ToolContext = createContext<ContextType | null>(null);

export enum LoadingType {
  AllTools = 'all tools',
  DeleteTool = 'delete tool',
  AddTool = 'add tool',
}

const ToolProvider: React.FC = ({ children }) => {
  const [tools, setTools] = useState<ToolData[]>([]);
  const [loadingManager, setLoadingManager] = useState<Loading>({
    allTools: true,
    addTool: false,
    deleteTool: false,
  });

  const [tagSearch, setTagSearch] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const saveTool = async (tool: ToolData) => {
    const newTool: ToolData = {
      title: tool.title,
      link: tool.link,
      description: tool.description,
      tags: tool.tags,
    };

    const res = await addToolDb(newTool);
    if (res instanceof Error) {
      return res;
    }
    setTools([...tools, res]);
  };

  const deleteTool = async (id: number) => {
    const res: any = await deleteToolDb(id);
    if (res instanceof Error) {
      return res;
    }
    const filteredTools = tools.filter((tool: ToolData) => tool.id !== id);
    setTools(filteredTools);
  };

  return (
    <ToolContext.Provider
      value={{
        tools,
        setTools,
        saveTool,
        deleteTool,
        tagSearch,
        setTagSearch,
        searchQuery,
        setSearchQuery,
        loadingManager,
        setLoadingManager,
      }}
    >
      {children}
    </ToolContext.Provider>
  );
};

export default ToolProvider;
