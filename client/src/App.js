import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Team from './components/team/Team';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';
import Events from './components/events/Events';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <section>
          <Switch>
            <Route exact path="/team" component={Team} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/events" component={Events}></Route>
          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
