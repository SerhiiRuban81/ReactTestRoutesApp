import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './Main';
import About from './About';
import News from './News';
import NotFound from './NotFound';
import NavMenu from './NavMenu';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <NavMenu></NavMenu>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/about" component={About}></Route>
          <Route strict path="/news/" component={News}></Route>
          <Route path="/hire" children={()=><h2>We are hiring software developers!</h2>}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
