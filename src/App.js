import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import './App.css';
import { AboutApp, AboutAuthor } from "./pages/About";
import Form from "./pages/Form";
import NotFound from "./pages/NotFound";
import Todo from './pages/Todo';
import { store, persistor } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path='/' component={Todo}></Route>
            <Route exact path='/about' component={AboutApp}></Route>
            <Route exact path='/about/author' component={AboutAuthor}></Route>
            <Route exact path='/form' component={Form}></Route>
            <Route path='*' component={NotFound}></Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
