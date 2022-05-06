import React from 'react';
import auth from '../../Firebase/Firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [googleuser, googleloading, googleerror] = useAuthState(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let navigate = useNavigate();
    let location = useLocation();
   
  
    let from = location.state?.from?.pathname || "/";

    const hanleSignIn = () => {
        signInWithGoogle()
        
            if(user)
            {
                navigate(from, { replace: true });
            }
    }
    return (
        <div>
            <h2>this is login pages</h2>
            <div className='text-center '> <button onClick={hanleSignIn} type="button" class="btn btn-success">Google Sign In</button></div>
        </div>
    );
};

export default Login;