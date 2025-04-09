import TodoFrom from "./component/Todo/TodoFrom";
import TodoList from "./component/Todo/TodoList";
import UserInfoWithReducer from "./component/UserInfoWithReducer/UserInfoWithReducer";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <>
      <div>
        <TodoProvider>
          <TodoFrom></TodoFrom>
          <TodoList></TodoList>
        </TodoProvider>
      </div>
      <div>
        <UserInfoWithReducer />
      </div>
    </>
  );
}

export default App;
