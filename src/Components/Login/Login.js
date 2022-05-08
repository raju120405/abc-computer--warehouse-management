import React, { useRef } from 'react';
import auth from '../../Firebase/Firebase.init';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const Navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        emailuser,
        emailloading,
        emailerror,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, ] = useSendPasswordResetEmail(
        auth
      );

    if (emailuser) {
        Navigate('/products')
    }
    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password)
    }
    const navigateRagister = event => {
        Navigate('/register')
    }
    const resetPassword=async()=>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    const [googleuser, googleloading, googleerror] = useAuthState(auth);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);



    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const hanleSignIn = () => {
        signInWithGoogle()

        if (error) {
            return (
                <div>
                    <p>Error: {error.message}</p>
                </div>
            );
        }
        if (loading) {
            return <p>Loading...</p>;
        }
        if (user) {
            navigate(from, { replace: true });
            const url = "https://tranquil-badlands-27515.herokuapp.com/login"
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
                <button type="submit" class="btn btn-primary">Login</button>
                <p>New to Abc Computer? <Link to={'/register'} className='text-danger text-decoration-none' onClick={navigateRagister}>Please Register</Link></p>
                <p>Forget Password? <Link to={'/register'} className='text-primary text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>
                
            </form>


            <div className='text-center '> <button onClick={hanleSignIn} type="button" className="btn btn-success">Google Sign In</button></div>
        </div>
    );
};

export default Login;