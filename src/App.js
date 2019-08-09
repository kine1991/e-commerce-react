import React, {useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'


const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route 
          exact 
          path="/signin" 
          render={() => currentUser ? <Redirect to="/"/> : <SignInAndSignUpPage/>} />
        />
      </Switch>
    </div>
  );
}



// class App extends React.Component {
//   unsubscribeFromAuth = null;

//   componentDidMount(){
//     const {checkUserSession} = this.props
//     checkUserSession()
//   }

//   componentWillUnmount(){
//     console.log('componentWillUnmount')
//     this.unsubscribeFromAuth()
//   }

//   render(){
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/shop" component={ShopPage} />
//           <Route path="/checkout" component={CheckoutPage} />
//           <Route 
//             exact 
//             path="/signin" 
//             render={() => this.props.currentUser ? <Redirect to="/"/> : <SignInAndSignUpPage/>} />
//           />
//         </Switch>
//       </div>
//     );

//   }
// }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state)
// })
// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// })
export default connect(mapStateToProps, mapDispatchToProps)(App);

