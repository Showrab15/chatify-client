import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link  } from 'react-router-dom';
import {  FaEye, FaEyeSlash } from 'react-icons/fa';


const SignIn = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const [showPassword, setShowPassword] = useState(false);




    const onSubmit = (data) => {

        console.log(data)
      
    }




    return (


        <div className="card w-96 mx-auto bg-green-500 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" {...register('name', { required: true })} name="name" placeholder="name" className="input input-bordered" />
                    {errors.name && <p className="text-rose-600">Please enter a name.</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register('email', { required: true })} name="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <p className="text-rose-600">Please enter a valid email.</p>}

                </div>
                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password', { required: true })}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered relative"
                                />
                                <p onClick={() => setShowPassword(!showPassword)}>
                                    <small className=" absolute -mt-7  md:ml-72 ml-48 ">
                                        {showPassword ? (
                                            <FaEyeSlash></FaEyeSlash>
                                        ) : (
                                            <FaEye></FaEye>
                                        )}
                                    </small>
                                </p>
                                {errors.password && (
                                    <p className="text-red-600">Please enter your password.</p>
                                )}
                            </div>
                
                <div className="form-control mt-6">
                    <input className="btn btn-primary text-white " type="submit" value="Sign In" />
                </div>
                <p className="text-white "> New in Chatify's  ? <Link to="/signup">SignUp</Link></p>

            </form>
        </div>
    );

};
export default SignIn;