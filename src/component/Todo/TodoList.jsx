import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoProvider";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);

  return (
    <div className="mt-5">
      {state.map((item) => (
        <div className="w-1/2 mx-auto  mb-5 border-[1px] border-gray-300 flex flex-col gap-[1px] p-2">
          <p>id: {item.id}</p>
          <p
            className={`cursor-pointer ${
              item.isCompleted ? "line-through disabled:true" : ""
            }`}
            onClick={() => dispatch({ type: "isCompleted", payload: item.id })}
          >
            Title: {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
