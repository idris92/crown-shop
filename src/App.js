
import React from 'react'

import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Homepage from './pages/homepage/homepage'

import ShopPage from './pages/shop/shop.jsx'

import Header from './components/header/header'

import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.jsx'

import {auth} from './firebase/firebase.utils'

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser:user
      })
     
    })
  }

  componentWillUnmount (){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
      
      <BrowserRouter>
      <Header currentUser ={this.state.currentUser} />
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/shop' component={ShopPage}/>
            <Route exact path='/signin' component={SignInSignUp}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
}

export default App;
