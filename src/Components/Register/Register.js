import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const nameRef = useRef('')
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const Navigate = useNavigate()
    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(name,email, password);
        createUserWithEmailAndPassword(email,password)

    }
    const navigatelogin = event => {
        Navigate('/login')
    }
    if (user){
        Navigate('/home')
    }
   
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center mt-3'>Please Register</h2>
            <form onSubmit={handleRegister} className='w-50 mx-auto'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input ref={nameRef} type="text" placeholder='Enter Your Name' required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input ref={emailRef} type="email" placeholder='Enter Your Email' required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input ref={passwordRef} type="password" placeholder='Enter Your Password' required class="form-control" id="exampleInputPassword1" />
                </div>
                
                <p>Already Have an acount? <Link to={'/login'} className='text-danger text-decoration-none'
                onClick={navigatelogin} >Please Login</Link></p>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>


       
        </div>
    );
};

export default Register;

