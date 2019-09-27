import React from 'react';
import Navbar from './components/navbar.component'
import { Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect'
import './App.css';



const App = () => {


  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <h1>Main</h1>} />
        <Route path="/about" render={() => <h1>About</h1>} />
        {/* <Route 
          exact 
          path="/signin" 
          render={() => currentUser ? <Redirect to="/"/> : <SignInAndSignUpPage/>} />
        /> */}
      </Switch>
    </div>
  );
}


// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser
// })

// const mapDispatchToProps = (dispatch) => ({
//   checkUserSession: () => dispatch(checkUserSession())
// })

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state)
// })
// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// })
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

