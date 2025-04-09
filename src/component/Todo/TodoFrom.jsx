import { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoFrom = () => {
  const { name, id, role } = useContext(TodoContext);
  console.log(name, id, role);
  return (
    <div>
      <p>This is Todo Form</p>
    </div>
  );
};

export default TodoFrom;
