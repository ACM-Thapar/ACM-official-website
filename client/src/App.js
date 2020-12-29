import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Team from './components/team/Team';
import Landing from './components/landing/Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <section>
          <Switch>
            <Route exact path="/team" component={Team} />
            <Route exact path="/landing" component={Landing} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
