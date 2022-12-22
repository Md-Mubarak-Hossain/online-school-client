import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../contexts/UserContext';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.from?.state?.pathname || '/';
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setSuccess('Successfully login!!!')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError('Error!! The login information is not valid!')

                console.error(error)
            })
    }
    const googeLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col ">
                <h1 className="text-4xl font-extrabold text-primary uppercase">Please Login now!</h1>
                <form onSubmit={handleSubmit} className="card flex w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <h3 className='text-red-600 '>{error}</h3>
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary mb-2">Log in</button>
                            <small>{success}</small>
                            <hr />
                            <h1 className='mx-auto'>Or</h1>
                            <hr />

                            <button onClick={googeLogin} className="btn btn-outline text-primary w-full py-0 px-5 mt-2"><FcGoogle></FcGoogle> <small className='text-sm lowercase px-2'>Google Sign In</small></button>
                        </div>
                    </div>
                </form>
                <h1><small>Don't have an account?</small><Link to='/signup'><button className='btn btn-active btn-link'>Sign Up</button></Link></h1>
            </div>
        </div >
    );
};

export default Login;