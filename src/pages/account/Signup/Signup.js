import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';


const Signup = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    // console.log(createUser);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        // const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password, name)
            .then(result => {
                const user = result.user;
                console.log(user, 'signup')
                form.reset();
                navigate('/login')
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero pb-5" >
            <div className="hero-content flex-col">
                <h1 className="text-4xl font-extrabold text-primary uppercase">Please Sign up now!</h1>
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className=" input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="PhotoURL" name="photoURL" className=" input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className=" input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6 ">
                            <button className="btn btn-primary mb-2">Sign Up</button>
                            <h1><small>Already have an account?</small><Link to='/login'><button className='btn btn-active btn-link'>Log In</button></Link></h1>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Signup;