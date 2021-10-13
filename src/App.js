import './App.css';
import {createBrowserHistory} from 'history';
import { Router, Switch } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import ManageMovie from './pages/admin/ManageMovie/ManageMovie';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      
      <Switch>

        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/detail/:maPhim" exact Component={Detail} />

        <AdminTemplate path="/admin/movie" exact Component={ManageMovie} />
        <AdminTemplate path="/admin/user" exact Component={ManageMovie} />
        <AdminTemplate path="/admin/theater" exact Component={ManageMovie} />
      
      </Switch>
    </Router>
  );
}

export default App;
