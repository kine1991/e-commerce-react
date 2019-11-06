import React from "react";
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import firebase, { auth, firestore } from '../../firebase/firebase.utils'
import { useStyles } from './register.styles'



const Register = () => {
  const [values, setValues] = React.useState({displayName: '', email: '', password: '', confirmPassword: ''})

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value })
  }
  const handleSubmit = async () => {
    const {email, password, displayName /* confirmPassword*/} = values
    const {user} = await auth.createUserWithEmailAndPassword(email, password)
    // console.log(user)
    const userRef = firestore.doc(`users/${user.uid}`)
    const snapShot = await userRef.get()
    if(!snapShot.exists){
      await userRef.set({
        displayName,
        email, 
        createAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    } else {
    }
  }

  const hangleWithGoogle = async () => {
    try{
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account'});
      const {user} = await auth.signInWithPopup(provider)
      const userRef = firestore.doc(`users/${user.uid}`)
      const snapShot = await userRef.get()
      if(!snapShot.exists){
        console.log(user)
        await userRef.set({
          displayName: user.displayName,
          email: user.email, 
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
          createAt: firebase.firestore.FieldValue.serverTimestamp()
        })

      }
    } catch(err){
      console.log(err)
    }
  }

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if (value !== values.password) {
            return false;
        }
        return true;
    });
  }, [values.password, values.confirmPassword])

  const classes = useStyles()

  return (
    <div className={classes.register}>
        <ValidatorForm /*ref="form"*/ className={classes.form} onSubmit={handleSubmit} onError={errors => console.log(errors)}>
        <h1 className={classes.title}>Register</h1>
            <TextValidator  fullWidth label="Name" onChange={handleChange} name="displayName" value={values.displayName} validators={['required']} errorMessages={['this field is required']}/>
            <TextValidator margin="normal" fullWidth label="Email" onChange={handleChange} name="email" value={values.email} validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']}/>
            <TextValidator margin="normal" fullWidth label="Password" onChange={handleChange} name="password" type="password" value={values.password} validators={['required']} errorMessages={['this field is required']}/>
            <TextValidator margin="normal" fullWidth label="Confirm Password" onChange={handleChange} name="confirmPassword" type="password" value={values.confirmPassword} validators={['required', 'isPasswordMatch']} errorMessages={['this field is required', 'Password do not match']}/>
            <Button className={classes.button} variant="contained" color="primary"  fullWidth type="submit">Submit</Button>
            <Button className={classes.button} color="primary" variant="outlined" fullWidth onClick={hangleWithGoogle}>Google</Button>
        </ValidatorForm>
    </div>
  );
};

export default Register;
