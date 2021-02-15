import axios from 'axios';

const API_URL =
  'https://my-json-server.typicode.com/mugasparetto/vuttr-db/tools';

const getAllTools = async () => {
  try {
    const { data } = await axios.get<ToolData[]>(API_URL);
    return data;
  } catch (error) {
    return error;
  }
};

const deleteToolDb = async (id: number) => {
  try {
    const res = await axios.delete<Object>(`${API_URL}/${id}`);
    return res;
  } catch (error) {
    return error;
  }
};

const addToolDb = async (tool: ToolData) => {
  try {
    const { data } = await axios.post(API_URL, tool, {
      headers: { 'Content-Type': 'application/json' },
    });
    return data;
  } catch (error) {
    return error;
  }
};

const getFilteredTools = async (searchQuery: string, isGlobal: boolean) => {
  let query;
  if (isGlobal) {
    query = `${API_URL}/?q=${searchQuery}`;
  } else {
    query = `${API_URL}/?tags_like=${searchQuery}`;
  }
  try {
    const { data } = await axios.get(query);
    return data;
  } catch (error) {
    return error;
  }
};

export { getAllTools, deleteToolDb, addToolDb, getFilteredTools };
