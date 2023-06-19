import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

const Home = () => {
    return (
        <div>
            this is home 
            <Link to="/signup" > Signup</Link>
            <SignUp></SignUp>
        </div>
    );
};

export default Home;