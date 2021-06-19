
import React from 'react'

import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {connect} from 'react-redux'

import Homepage from './pages/homepage/homepage'

import ShopPage from './pages/shop/shop.jsx'

import Header from './components/header/header'

import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.jsx'

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser}= this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          });
        })
      }
      else{
        setCurrentUser(userAuth)
      }
    });
     
    }

  componentWillUnmount (){
    this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div>
      
      <BrowserRouter>
      <Header />
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

const mapDispathToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispathToProps )(App);
