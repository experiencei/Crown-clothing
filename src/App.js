import React, { Component } from 'react'
 import './App.css';
 import Homepages from './components/directory/directory';
 import Shoppage from './pages/shoppages/shoppage';
 import Header from './components/haeder/header';
 import { connect } from 'react-redux';
 import { setCurrentUser } from './redux/user/user.actions.';
 import SigninUp from './pages/Signup/sign-in-Up';
 import { Route ,Switch ,Redirect } from "react-router-dom";
 import { auth , createDocument} from './firebase/firebase.utility';

 
 
 class App extends Component {

    unsubscribeFromAuth = null;
    
    componentDidMount(){
      const { setCurrentUser } = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{ 
     if(userAuth){
      const userRef = await createDocument(userAuth); 

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
           id : snapShot.id,
           ...snapShot.data()
         })
      })
     }
       else{
        setCurrentUser({userAuth})
       }
    })
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }
   render() {
     return (
       <div>
      <Header />
      <Switch>
      <Route exact path="/" component={ Homepages }/>
      <Route  exact path="/shop" component={ Shoppage }/>
      <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : ( 
                <SigninUp />
              )
            }
          />
      </Switch>
       </div>
     )
   }
 }

 const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
