import { useContext } from "react";
import { UserContext } from "../context";
import { Link, useNavigate } from "react-router-dom";

const Logged = () => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setState({ data: null, loading: false, error: null });
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-end my-5 shadow-md">
        <button
          onClick={handleLogout}
          className="font-semibold text-blue-600 text-lg mr-6 mb-3"
        >
          Logout
        </button>
      </div>
      <div>Hello</div>
    </>
  );
};

export default Logged;
