import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getIdToken
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [SignUpStatus, setSignUpStatus] = useState(false);
  const [LoginStatus, setLoginStatus] = useState(false);
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const signInUsingGoogle = (e) => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
    e.preventDefault();
  };

  const logOut = (e) => {
    setIsLoading(false);
    signOut(auth)
      .then(() => { })
      .finally(() =>
      {
        setUser({});
        setIsLoading(true);
      } 
      );
      
    
  };
  const SignupWithEmailPassword = (e) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password,name)
      .then((userCredential) => {
        saveUser(email,name)
        setSignUpStatus(true);
        // const user = userCredential.user;
        // setUser(user)
        // setIsLoading(false)
        console.log("in create");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
    e.preventDefault();
  };
  const signInWithEmailPassword = (e) => {
    
    // console.log("signin With email password");
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoginStatus(true);
        // console.log("signin With email password accepted");
        const user = userCredential.user;
        setIsLoading(false)
        setUser(user);
        // setEmail(user.email)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setUser({})
      });
    e.preventDefault();
  };

  useEffect(() => {
    // const auth = getAuth();
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user)
        .then(idToken => localStorage.setItem('idToken',idToken))
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user)
        // console.log(user);
        // setIsLoading(false)
        // ...
      } else {
        setError("")
        // console.log("no data");
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
  }, [])
  const saveUser = (email,name) =>{
    const user = {name,email}
    fetch('https://pure-spire-90343.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
  }

  return {
    SignupWithEmailPassword,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    signInWithEmailPassword,
    user,
    error,
    SignUpStatus,
    LoginStatus,
    isLoading,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
