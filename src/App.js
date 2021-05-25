import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <li>
            <Link to="/">Home</Link>
            </li>

            <li>
            <Link to="/portfolio"> </Link>
            </li>
            <li>
            <Link to="/about"> </Link>  
            </li>
            <li>
            <Link to="/contact"> </Link>
            </li>
          </nav>
          <Switch>
            <Route path="/">
              <LandingPage />
            </Route>
            <Route>

            </Route>
            <Route>

            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
