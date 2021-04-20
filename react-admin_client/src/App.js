import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../src/pages/login/login'
import Admin from '../src/pages/admin/admin'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' component={Admin}></Route>
      </Switch>
    </BrowserRouter>
  );  
}

export default App;
