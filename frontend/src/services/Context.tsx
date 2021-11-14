import { createContext, useContext, FC, useState } from 'react';

interface contextValues {
  login: boolean;
  updateLogin: () => void;
}

const Context = createContext({} as contextValues);

const ContextProvider: FC = ({ children }) => {
  const [login, setLogin] = useState(false);

  function updateLogin() {
    setLogin((props) => !props);
  }

  return (
    <Context.Provider value={{ login, updateLogin }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

export const useContextProvider = () => useContext(Context);
