import { createContext } from "react";

export const TodoContext = createContext(undefined);

const TodoProvider = ({ children }) => {
  const values = {
    name: "Rabiul",
    id: 1234,
    role: "admin",
  };
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};
export default TodoProvider;
