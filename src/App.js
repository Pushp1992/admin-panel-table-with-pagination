import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteList from '../src/routes';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
function App() {
  return (
    <div className="App" data-testid="app">
      <Router data-testid="router-component" history={history}>
        <RouteList />
      </Router>
    </div>
  );
}

App.displayName = 'app-test';

export default App;
