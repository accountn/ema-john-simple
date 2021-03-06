import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    const handleSignIn = () =>{
        auth.singInWithGoogle()
        .then(res => {
            window.location.pathname = '/review';
        })
    }
    const handleSignOut = () =>{
        auth.signOut()
        .then(res => {
            window.location.pathname = '/';
        });
    }
    
    return (
        <div>
            <h1>join the login party</h1>

            {
                auth.user ? <button onClick={handleSignOut}>sign out</button> :
                <button onClick={handleSignIn}>Google sign in</button>
            }
        </div>
    );
};

export default Login;