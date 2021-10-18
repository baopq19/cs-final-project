import './App.css';
import {createBrowserHistory} from 'history';
import { Route, Router, Switch } from 'react-router';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import ManageMovie from './pages/admin/ManageMovie/ManageMovie';
import ManageUser from './pages/admin/ManageUser/ManageUser';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import AddShowtime from './pages/admin/AddShowtime/AddShowtime';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      
      <Switch>

        <HomeTemplate path="/" exact Component={Home} />
        <HomeTemplate path="/detail/:maPhim" exact Component={Detail} />
        <HomeTemplate path="/profile" exact Component={Profile} />

        <AdminTemplate path="/admin/movie" exact Component={ManageMovie} />
        <AdminTemplate path="/admin/movie/showtime/:id" exact Component={AddShowtime} />

        <AdminTemplate path="/admin/user" exact Component={ManageUser} />
        <AdminTemplate path="/admin/theater" exact Component={ManageMovie} />

        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
