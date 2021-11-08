import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { AboutApp, AboutAuthor } from "./pages/About";
import NotFound from "./pages/NotFound";
import Todo from './pages/Todo';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Todo}></Route>
        <Route exact path='/about' component={AboutApp}></Route>
        <Route exact path='/about/author' component={AboutAuthor}></Route>
        <Route path='*' component={NotFound}></Route>

      </Switch>
    </Router>
  );
}

export default App;
