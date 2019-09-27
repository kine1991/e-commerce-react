import React from "react";
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import validator from 'validator'

import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import firebase, { auth } from '../../firebase/firebase.utils'
import { setCurrentUser } from '../../redux/user/user.action'

import { useStyles } from './login.styles';

const validate = values => {
    const errors = {}
    console.log('values')
    console.log(values)
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'Required'
    } else if (values.password.length < 5) {
      errors.password = 'Must be minimum 6 characters'
    } else if (values.password.length > 11) {
        errors.password = 'Must be maximum 10 characters'
    } 
    return errors
}

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

  const onSubmit = (formValues) => {
      console.log(formValues)
  } 

  const classes = useStyles()

  function renderError(meta){
    console.log(meta)
    if(meta.touched && meta.error){
        return (
            <div>{meta.error}</div>
        )
    }
  }

  function renderInput(propsForm){
      console.log(propsForm)
      return (
        <div>
            <label htmlFor="">{propsForm.label}</label>
            <input {...propsForm.input} />
            {/* <div>{propsForm.meta.error}</div> */}
            {renderError(propsForm.meta)}
        </div>
      )
  }
//   const renderInput = (formProps)  => {
//       console.log(formProps)
//       return <input onChange={formProps.input.onChange} value={formProps.input.value}/>
//   }


 
  return (
    <div className={classes.login}>
        <form onSubmit={props.handleSubmit(onSubmit)}>
            <Field name="email" component={renderInput} label="Enter Title" />
            <Field name="password" component={renderInput} label="Enter Description" />
            <button type="submit">sdfdf</button>
        </form>
        {/* <ValidatorForm className={classes.form} onSubmit={handleSubmit} onError={errors => console.log(errors)}>
        <h1 className={classes.title}>Login</h1>
            <TextValidator variant="outlined" margin="dense" fullWidth label="Email" onChange={handleChange} type="email" name="email" value={values.email} validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']}/>
            <TextValidator variant="outlined" margin="dense" fullWidth label="Password" onChange={handleChange} type="password" name="password" value={values.password} validators={['required']} errorMessages={['this field is required']}/>
            <Button color="primary" className={`${classes.button} custom-button`} variant="contained"   fullWidth type="submit">Submit</Button>
            <Button color="primary" className={`${classes.button} custom-button`}  variant="outlined" onClick={hangleWithGoogle} fullWidth>Google</Button>
            <Button color="secondary" className={`${classes.button} custom-button`}  variant="outlined" onClick={testClick} fullWidth>Google</Button>
            {props.user}
        </ValidatorForm> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
    user: state.user.currentUser
}); 

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

const formWrapped = reduxForm({
    form: 'loginForm',
    validate
})(Login)

export default connect(mapStateToProps, mapDispatchToProps)(formWrapped);
