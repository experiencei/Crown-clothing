import React, { Component } from 'react'
import Forminput from '../forminput/forminput';
import Custombtn from '../customButton/custombtn';
import { signInWithGoogle } from '../../firebase/firebase.utility';
import "./signin.scss"

export default class Signin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
           email : ''  ,
           password : ''
        }
    }
    handleSubmit = e => { 
     e.preventDefault()
     this.setState({ email:"" , password:""})
    }

    handleChange = e => {
    const {name , value} = e.target;

    this.setState({[name] : value})
  }

    render() {
        
         const {email , password} = this.state
        return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <Forminput
                    name='email'
                    type='email'
                    handleChange={this.handleChange}
                    value={email}
                    label='email'
                    required
                   />
                <Forminput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={this.handleChange}
                    label='password'
                     required  
                   />
                   <div class="button">
                       <Custombtn type="submit">Sign In</Custombtn>
                       <Custombtn onClick={signInWithGoogle} isGoogleSignin>Sign In with Google</Custombtn>
                   </div>
               </form> 
            </div>
        )
    }
}
