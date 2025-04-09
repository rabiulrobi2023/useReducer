import TodoFrom from "./component/Todo/TodoFrom";
import UserInfoWithReducer from "./component/UserInfoWithReducer/UserInfoWithReducer";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <>
      <div>
        <TodoProvider>
          <TodoFrom></TodoFrom>
        </TodoProvider>
      </div>
      <div>
        <UserInfoWithReducer />
      </div>
    </>
  );
}

export default App;
