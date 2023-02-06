import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import { googleLoginAPI, googleSignUpAPI } from '../../../api/user';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userAddDetails } from '../../../redux/authSliceUser';
const GoogleSignUp = () => {
  const [loginErrorMessage, setLoginErrorMessage] = useState(false)
  const [signUpErrorMessage, setSignUpErrorMessage] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handelGoogleSignUp = async (credentialResponse) => {
    setLoginErrorMessage(false)
    const decoded = jwtDecode(credentialResponse.credential);
    const { name, picture, email } = decoded
    const response = await googleSignUpAPI({ name, picture, email })
    if (response?.authStatus) {
      localStorage.setItem('userToken', response?.token)
      localStorage.setItem('id', response?.id)
      dispatch(userAddDetails({ token: response?.token, id: response?.id }))
      navigate('/')
    } else {
      setSignUpErrorMessage(true)
    }
  }

  const handelGoogleSignIn = async (credentialResponse) => {
    setSignUpErrorMessage(false)
    const decoded = jwtDecode(credentialResponse.credential);
    const { email } = decoded
    const response = await googleLoginAPI({ email })
    if (response?.authStatus) {
      localStorage.setItem('userToken', response?.token)
      localStorage.setItem('id', response?.id)
      dispatch(userAddDetails({ token: response?.token, id: response?.id }))
      navigate('/')
    } else {
      setLoginErrorMessage(true)
    }
  }

  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <GoogleLogin size='large'
          onSuccess={(credentialResponse) => {
            location.pathname === '/register' ?
              handelGoogleSignUp(credentialResponse) :
              handelGoogleSignIn(credentialResponse)
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
      {loginErrorMessage && <p className='text-red-500 flex justify-center mt-2'>email not registered</p>}
      {signUpErrorMessage && <p className='text-red-500 flex justify-center mt-2'>email All ready registered</p>}
    </div>
  )
}

export default GoogleSignUp