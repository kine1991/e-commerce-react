import React, {useState} from 'react';
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { auth } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';


const SignIn = ({emailSignInStart, googleSignInStart}) => {
  const [userCredentials, setCredentials] = useState({email: '', password: ''})
  
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password)
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ [name]: value });
  };


  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
}

// export default SignIn


// class SignIn extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: ''
//     };
//   }

//   handleSubmit = async event => {
//     event.preventDefault();
//     const { email, password } = this.state;
//     const {emailSignInStart} = this.props
//     emailSignInStart(email, password)
//   };


//   handleChange = event => {
//     const { value, name } = event.target;

//     this.setState({ [name]: value });
//   };

//   render() {
//     const {googleSignInStart} = this.props
//     return (
//       <SignInContainer>
//         <SignInTitle>I already have an account</SignInTitle>
//         <span>Sign in with your email and password</span>

//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//             name='email'
//             type='email'
//             handleChange={this.handleChange}
//             value={this.state.email}
//             label='email'
//             required
//           />
//           <FormInput
//             name='password'
//             type='password'
//             value={this.state.password}
//             handleChange={this.handleChange}
//             label='password'
//             required
//           />
//           <ButtonsBarContainer>
//             <CustomButton type='submit'> Sign in </CustomButton>
//             <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
//               Sign in with Google
//             </CustomButton>
//           </ButtonsBarContainer>
//         </form>
//       </SignInContainer>
//     );
//   }
// }

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);
