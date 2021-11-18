import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import Swal from "sweetalert2";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // user registration 
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
                // Set data to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // UserLogin 
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                Swal.fire(
                    'Logged in Succefully!',
                    'You are now logged in!',
                    'success'
                )
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');

            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Sign in with Google
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                Swal.fire(
                    'Logged in Succefully!',
                    'You are now logged in!',
                    'success'
                )
                saveUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');

            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    // Send a password reset mail
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent! 
                alert('A Password Reset Email sent to your email address')
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            });
    }
    // observe users activity
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])
    useEffect(() => {
        fetch(`https://limitless-retreat-11004.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://limitless-retreat-11004.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result.insertedId);
                if (result.insertedId) {
                    Swal.fire(
                        'Registered Succefully!',
                        'Your registration has been done!',
                        'success'
                    )
                    // alert("Booked Successfully!");

                }

            });
    }
    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        resetPassword,
        signInWithGoogle,
        logout
    }
}

export default useFirebase;