import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import { AuthContext } from '../Provider/AuthProvider';
import Conversations from './Conversations';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
           {user ? <Conversations></Conversations> : <SignUp></SignUp>}
        </div>
    );
};

export default Home;