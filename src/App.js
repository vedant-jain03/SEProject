import React, { useState, useEffect } from "react"
import Signup from "./component/Signup";
import fire from "./firebase"
import Store from "./component/Store"

const App = () => {
  const [user, setuser] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [emailerror, setemailerror] = useState('');
  const [passworderror, setpassworderror] = useState('');
  const [hasaccount, sethasaccount] = useState(false);
  const clearInputs = () => {
    setemail('')
    setpassword('')
  }
  const clearerrors = () => {
    setemailerror('')
    setpassworderror('')
  }
  const handlelogin = () => {
    fire.
      auth().
      signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setemailerror(err.message);
            break;

          case "auth/wrong-password":
            setpassworderror(err.message);
            break;
        }
      })
  }
  const handlesignup = () => {
    // clearerrors();
    fire
      .auth().createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setemailerror(err.message);
            break;

          case "auth/weak-password":
            setpassworderror(err.message);
            break;
        }
      })
  }
  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        setuser(user);
      }
      else {
        setuser('');
      }
    })
  }
  useEffect(()=>{
    authListener();
},[]);
  return (
    <div className="App">
      {
          <Signup user={user} email={email} setemail={setemail} password={password} setpassword={setpassword} handlelogin={handlelogin} handlesignup={handlesignup} hasaccount={hasaccount} sethasaccount={sethasaccount} emailerror={emailerror} passworderror={passworderror} />
      }
    </div>
  );
}

export default App;
