import './App.css';
import {createBrowserHistory} from 'history';
import { Router, Switch } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      
      <Switch>

        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/detail/:maPhim" exact Component={Detail} />
      
      </Switch>
    </Router>
  );
}

export default App;
