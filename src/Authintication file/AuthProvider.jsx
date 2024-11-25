import { createContext, useEffect, useState } from "react";
import app from "../Firebase file/Firebase";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
// import axios from "axios";
import PropTypes from 'prop-types';
import axios from "axios";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    // console.log(users.)
   
    const auth = getAuth(app)
    const [users, setusers] = useState([])
    const [times, setTimes] = useState([])
    const [loing, setLoding] = useState(true)
    const GoogleProvider = new GoogleAuthProvider()
    const GithubProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, user => {
            console.log(user)
            setusers(user)
            const userEmail = user?.email || user?.email;
            const loggedUser = { email: userEmail }

            if (user) {
                axios.post('https://searplate-network-surversite.vercel.app/jwtToken', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log('token response', res.data)
                    })
            }
            else {
                axios.post('https://searplate-network-surversite.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data)
                    })
            }
            setLoding(false)
        })
        return () => {
            setLoding(true)
            unSubscribe()
        }
    }, [auth])

    const updatePhoto = (name, Url) => {
        // setLoding(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: Url
        })
    }

    const logOut = () => {
        setLoding(true)
        signOut(auth)
    }


    const googleLogin = () => {
        setLoding(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    const gitHubLogin = () => {
        setLoding(true)
        return signInWithPopup(auth, GithubProvider)
    }

    const authInfo = {
        createUser,
        LoginUser,
        updatePhoto,
        users,
        logOut,
        googleLogin,
        gitHubLogin,
        setTimes,
        times,
        loing
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;