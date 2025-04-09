import React from "react";
import { useReducer } from "react";

const initialState = {
  name: "",
  age: 0,
  hobbies: [],
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobbies":
      return {
        ...currentState,
        hobbies: [action.payload],
      };
    default:
      currentState;
  }
};

const UserInfoWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    // e.target.reset();
  };

  return (
    <div className="m-10 mx-auto border-red-300 border-2 p-10 w-1/2 flex flex-col">
      <p className=" text-center text-2xl font-bold pb-5">USER FORM</p>
      <div className="m-auto flex">
        <form className="m-auto flex gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-40 border-2 border-gray-600 h-10 p-3"
            onChange={(e) =>
              dispatch({ type: "addName", payload: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Age"
            className="w-40 border-2 border-gray-600 h-10 p-3"
            onChange={(e) =>
              dispatch({ type: "addAge", payload: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Hobbies"
            className="w-40 border-2 border-gray-600 h-10 p-3"
            onBlur={(e) =>
              dispatch({ type: "addHobbies", payload: e.target.value })
            }
          />
          <button
            type="submit"
            className="px-5 py-2  bg-blue-500 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserInfoWithReducer;
