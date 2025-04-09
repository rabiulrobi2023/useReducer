import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoFrom = () => {
  const { state, dispatch } = useContext(TodoContext);

  const [task, setTask] = useState("");

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(8).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "addTodo", payload: todo });
  };

  return (
    <div className="border-2 border-gray-400 w-1/2 mx-auto p-4 mt-10">
      <h4 className="text-center font-bold p-2">Todo Form</h4>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="addTodo"></label>
        <input
          onBlur={(e) => setTask(e.target.value)}
          type="text"
          className="border-[2px] px-2 w-full h-16"
          placeholder="Entry Todo "
        />
        <button
          type="submit"
          className="bg-blue-500 rounded-sm px-2 mx-auto flex text-white mt-3 py-1 font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoFrom;
