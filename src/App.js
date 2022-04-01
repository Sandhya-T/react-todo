
import './App.css';
import ToDoList from './components/ToDo/ToDoList';
import NewToDo from './components/ToDo/NewToDo';
import ToDoContextProvider from './state/ToDoContextProvider';
import ToDoFooter from './components/ToDo/ToDoFooter';

function App() {
  return (
    <ToDoContextProvider>
      <div className="app">
        <div className='app-content'>
          <div className='title'>Todo App</div>
          <NewToDo />
          <ToDoList />
          <ToDoFooter />
        </div>
      </div>
    </ToDoContextProvider>
  );
}

export default App;
