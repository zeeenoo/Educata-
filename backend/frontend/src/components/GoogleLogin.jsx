import GoogleLogin from 'react-google-login';
import React,{useState} from 'react';
import axios from 'axios';

const GoogleAuthButton = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleGoogleResponse = (response) => {
        if (response.error) {
            console.log(response.error);
        } else {
            setLoggedIn(true);
            // Send the response to the backend for validation
            axios.post('/api/google-login/', {id_token: response.getAuthResponse().id_token})
                .then(res => {
                    // Handle successful login
                })
                .catch(error => {
                    // Handle error
                });
        }
    }

    return (
        <div className='mx-auto w-fit'>

            {!loggedIn &&
                <GoogleLogin
                    clientId='316226354128-p5o2hg1765q8bfg230u4br3btnet1u63.apps.googleusercontent.com'
                    buttonText="Login with Google"
                    onSuccess={handleGoogleResponse}
                    onFailure={handleGoogleResponse}
                    cookiePolicy={'single_host_origin'}
                />
            }
            {loggedIn &&
                <p>You are logged in</p>
            }
        </div>
    );
}

export default GoogleAuthButton;
