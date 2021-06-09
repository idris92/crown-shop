
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Homepage from './pages/homepage/homepage'

import ShopPage from './pages/shop/shop.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/shop' component={ShopPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
