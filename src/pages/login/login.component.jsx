import React from "react";
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import firebase, { auth } from '../../firebase/firebase.utils'
import { setCurrentUser } from '../../redux/user/user.action'

import { useStyles } from './login.styles'

const Login = (props) => {
    console.log(props)
  const [values, setValues] = React.useState({email: '', password: ''})

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    const {email, password} = values
    auth.signInWithEmailAndPassword(email, password)
      .then(user => console.log(user))
  }

  const hangleWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account'});
    auth.signInWithPopup(provider).then(x => console.log(x))
  }

  const testClick = () => {
      console.log('test')
      props.setCurrentUser('TestUser')
    // setCurrentUser('Nikolay')
  }

  const classes = useStyles()
 
  return (
    <div className={classes.login}>
        <ValidatorForm className={classes.form} onSubmit={handleSubmit} onError={errors => console.log(errors)}>
        <h1 className={classes.title}>Login</h1>
            <TextValidator variant="outlined" margin="dense" fullWidth label="Email" onChange={handleChange} type="email" name="email" value={values.email} validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']}/>
            <TextValidator variant="outlined" margin="dense" fullWidth label="Password" onChange={handleChange} type="password" name="password" value={values.password} validators={['required']} errorMessages={['this field is required']}/>
            <Button color="primary" className={`${classes.button} custom-button`} variant="contained"   fullWidth type="submit">Submit</Button>
            <Button color="primary" className={`${classes.button} custom-button`}  variant="outlined" onClick={hangleWithGoogle} fullWidth>Google</Button>
            <Button color="secondary" className={`${classes.button} custom-button`}  variant="outlined" onClick={testClick} fullWidth>Google</Button>
            {props.user}
        </ValidatorForm>
    </div>
  );
};

const mapStateToProps = (state) => ({
    user: state.user.currentUser
}); 

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
