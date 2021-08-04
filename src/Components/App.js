import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import Profile from './Profile';
import Cats from './Cats';
import ProtectedRoute from './ProtectedRoute';
import './login.css';
import './main.css';
import './main-query.css';
import './profile.css';
import './cat.css';
import './cat-query.css';
import './profile-query.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/" exact component={Main} />
          <ProtectedRoute path="/Profile/:id" exact component={Profile} />
          <ProtectedRoute path="/Cats" exact component={Cats} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
