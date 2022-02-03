import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Team from './components/team/Team';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';
import Events from './components/events/Events';
import Blogs from './components/blogs/Blogs';
import Projects from './components/projects/Projects';
import Videos from './components/videos/Videos';
import { useEffect } from 'react';
import Axios from 'axios';

function App() {

  useEffect(async() => {
   await Axios.get('https://acm-official-website.herokuapp.com/team');
  },[])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <section>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/events" component={Events}></Route>
            <Route exact path="/blogs" component={Blogs}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route exact path="/videos" component={Videos}></Route>
          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
