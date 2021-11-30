import { useContext } from "react";
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";

const Logged = () => {
  const [state, setState] = useContext(UserContext);
  const navigate = useNavigate();

  console.log(state.data?.username);
  const handleLogout = () => {
    setState({ data: null, loading: false, error: null });
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-end items-center my-5 shadow-sm">
        <button
          onClick={handleLogout}
          className="bg-indigo-500 text-gray-100 p-2 w-24 rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg mr-6 mb-3"
        >
          Logout
        </button>
      </div>
      <div className="flex justify-center mt-8">
        <h1 className="text-base font-semibold">
          Hello {state.data?.username} you are now logged to the app!
        </h1>
      </div>
    </>
  );
};

export default Logged;
