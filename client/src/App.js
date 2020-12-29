import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Team from './components/team/Team';

function App() {
  return (
    <Router>
      <div className="App">
        <section>
          <Switch>
            <Route exact path="/team" component={Team} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
