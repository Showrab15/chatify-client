import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate  } from 'react-router-dom';
import {  FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import add  from '../../src/assets/add.png'

const user_img_hosting_token = import.meta.env.VITE_User_Image_hosting_token;

const SignUp = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const { createUser ,userUpdateProfile} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();
    const user_img_hosting_url = `https://api.imgbb.com/1/upload?key=${user_img_hosting_token}`



    // const onSubmit = (data) => {
    //     console.log(data);
    //     const formData = new FormData();
    //     formData.append('image', data.image[0])

    //     fetch(user_img_hosting_url, {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(res=> res.json()) 
    //     .then(imgResponse=> {
    //         if(imgResponse.success){
    //             const imgURL = imgResponse.data.display_url;
    //             createUser(data.email, data.password, imgURL)
    //             .then((result) => {
    //                 const loggedUser = result.user;
    //                 console.log(loggedUser);
    
    //                 userUpdateProfile( data.name, data.email, imgURL)
    //                     .then(() => {
    //                         const saveUser = { name: data.name, email: data.email, imgURL:imgURL};
    //                         fetch('http://localhost:5000/users', {
    //                             method: 'POST',
    //                             headers: {
    //                                 'content-type': 'application/json',
    //                             },
    //                             body: JSON.stringify(saveUser),
    //                         })
    //                             .then((res) => res.json())
    //                             .then((data) => {
    //                                 if (data.insertedId) {
    //                                     reset();
    //                                     navigate('/convo')
    //                                 }
    //                             });
    //                     })
    //                     .catch((error) => console.log(error));
    //             });
    //         }
    //     })    

       
    // };



    const onSubmit = (data) => {
      
                createUser(data.email, data.password)
                .then((result) => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
    
                    userUpdateProfile( data.name, data.email)
                        .then(() => {
                            const saveUser = { name: data.name, email: data.email};
                            fetch('http://localhost:5000/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json',
                                },
                                body: JSON.stringify(saveUser),
                            })
                                .then((res) => res.json())
                                .then((data) => {
                                    if (data.insertedId) {
                                        reset();
                                        navigate('/convo')
                                    }
                                });
                        })
                        .catch((error) => console.log(error));
                });
       

       
    };


   
    return (


        <div className="card w-96 mx-auto bg-green-500 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control mx-auto">
    <input  {...register("image")} style={{ display: "none" }} type="file" name="photoURL" id="file" />
    <label htmlFor="file">
        <img className="w-20 h-20 cursor-pointer" src={add} alt="" />
    </label>
</div>

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
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? "text" : "password"}
                        {...register('password',
                            {
                                required: true,
                                maxLength: 20,
                                minLength: 6,
                                pattern: /^(?=.*[A-Z])(?=.*[\W_]).*$/
                            })} name="password" placeholder="password" className="input input-bordered relative" />
                    <p onClick={() => setShowPassword(!showPassword)}>

                        <small className="absolute -mt-7 ml-48 md:ml-72">
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </small>
                    </p>
                    {errors.password?.type === 'required' && <p className="text-red-600">Password  is required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password  Must Be 6 character Long </p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have at least one  capital letter
                        and  a special character</p>
                    }


                </div>
                
                <div className="form-control mt-6">
                    <input className="btn btn-primary text-white " type="submit" value="Sign Up" />
                </div>
                <p className="text-white "> Have An Previous Chatify's Account ? <Link to="/signin">SignIn</Link></p>

            </form>
        </div>
    );

};
export default SignUp;