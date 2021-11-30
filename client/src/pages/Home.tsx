import { useState } from "react";
import Forgot from "../components/Forgot";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const Home = () => {
  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(false);
  const [forgot, setForgot] = useState(false);

  const showLogin = () => {
    setLogin(true);
    setSignUp(false);
    setForgot(false);
  };
  const showSignUp = () => {
    setSignUp(true);
    setLogin(false);
    setForgot(false);
  };
  const showForgot = () => {
    setForgot(true);
    setSignUp(false);
    setLogin(false);
  };
  return (
    <>
      {login && <Login onSignUp={showSignUp} onForgot={showForgot} />}
      {signUp && <SignUp onLogin={showLogin} />}
      {forgot && <Forgot onLogin={showLogin} onSignUp={showSignUp} />}
    </>
  );
};

export default Home;
