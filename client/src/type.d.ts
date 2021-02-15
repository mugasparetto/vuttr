interface ToolData {
  id?: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface Loading {
  allTools: boolean;
  deleteTool: boolean;
  addTool: boolean;
}

type ContextType = {
  tools: ToolData[];
  setTools: React.Dispatch<React.SetStateAction<Array>>;
  saveTool: (tool: ToolData) => void;
  deleteTool: (id: number) => void;
  tagSearch: boolean;
  setTagSearch: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  loadingManager: Loading;
  setLoadingManager: React.Dispatch<React.SetStateAction<Loading>>;
};
