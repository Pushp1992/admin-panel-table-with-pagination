import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteList from '../src/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <RouteList />
      </Router>
    </div>
  );
}

App.displayName = 'app-test';

export default App;
