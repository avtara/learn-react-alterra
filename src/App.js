import './App.css';
import TodoPage from './pages/Todo';
import { mockData } from './mockData';

function App() {
  return (
    <div className="App">
      <TodoPage todos={mockData} />
    </div>
  );
}

export default App;
