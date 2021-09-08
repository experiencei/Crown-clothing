import React, { Component } from 'react'
 import './App.css';
 import Homepages from './components/directory/directory';
 import Shoppage from './pages/shoppages/shoppage';
 import Header from './components/haeder/header';
 import SigninUp from './pages/Signup/sign-in-Up';
 import { Route ,Switch } from "react-router-dom";
 import { auth , createDocument} from './firebase/firebase.utility';

 
 
 export default class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         currentuser : null
      }
    }

    unsubscribeFromAuth = null;
    
    componentDidMount(){
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{ 
     if(userAuth){
      const userRef = await createDocument(userAuth); 

      userRef.onSnapshot(snapShot => {
         this.setState({
           id : snapShot.id,
           ...snapShot.data()
         })
      })
     }
       else{
         this.setState({ currentuser : userAuth})
       }
    })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }
   render() {
     return (
       <div>
      <Header currentState={this.state.currentuser}/>
      <Switch>
      <Route exact path="/" component={ Homepages }/>
      <Route  exact path="/shop" component={ Shoppage }/>
      <Route  exact path="/signin" component={ SigninUp }/>
      </Switch>
       </div>
     )
   }
 }
 
