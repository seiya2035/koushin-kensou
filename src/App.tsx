import './App.css';
import Welcome from './components/Welcome';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="background-title">TASKS</div>
      <div className="main-container">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
