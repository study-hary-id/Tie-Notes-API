import './App.css';
import HomePage from './pages/Home';
import AddPage from './pages/Add';
import EditPage from './pages/Edit';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/add">
          <AddPage />
        </Route>
        <Route path="/edit">
          <EditPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
