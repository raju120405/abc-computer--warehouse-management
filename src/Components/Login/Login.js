import React, { useRef } from 'react';
import auth from '../../Firebase/Firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const Navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

    }
    const navigateRagister = event => {
        Navigate('/register')
    }


    const [googleuser, googleloading, googleerror] = useAuthState(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let navigate = useNavigate();
    let location = useLocation();


    let from = location.state?.from?.pathname || "/";

    const hanleSignIn = () => {
        signInWithGoogle()

        if (user) {
            const url = "http://localhost:5000/login"
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: user.email
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));

            navigate(from, { replace: true });
        }
    }
    return (
        <div>
            <h2 className='text-center'>Please LogIn </h2>
            <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input ref={emailRef} type="email" placeholder='Enter Your Email' required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input ref={passwordRef} type="password" placeholder='Enter Your Password' required class="form-control" id="exampleInputPassword1" />
                </div>
                <p>New to Abc Computer? <Link to={'/register'} className='text-danger text-decoration-none' onClick={navigateRagister}>Please Register</Link></p>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>


            <div className='text-center '> <button onClick={hanleSignIn} type="button" className="btn btn-success">Google Sign In</button></div>
        </div>
    );
};

export default Login;