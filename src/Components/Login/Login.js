import React from 'react';
import auth from '../../Firebase/Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const hanleSignIn = ()=>{
        signInWithGoogle()
    }
    return (
        <div>
            <h2>this is login pages</h2>
           <div className='text-center '> <button onClick={hanleSignIn} type="button" class="btn btn-success">Google Sign In</button></div>
        </div>
    );
};
    
export default Login;