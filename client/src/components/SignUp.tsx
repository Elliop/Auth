import { ColorSwatchIcon } from "@heroicons/react/solid";

const SignUp = (props: any) => {
  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    let username = event.target.elements.username?.value;
    let email = event.target.elements.email?.value;
    let password = event.target.elements.password?.value;
    console.log(username, email, password);
  };
  return (
    <div className="lg:flex">
      <div className="lg:w-1/2">
        <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
            <div>
              <ColorSwatchIcon className="w-10 text-indigo-500" />
            </div>
            <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
              Elliop
            </div>
          </div>
        </div>
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2
            className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
          >
            Sign Up
          </h2>
          <div className="mt-12">
            <form onSubmit={handleFormSubmit}>
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Username
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="text"
                  id="email"
                  placeholder="Mike"
                />
              </div>
              <div className="mt-8">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Email Address
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="email"
                  id="email"
                  placeholder="mike@gmail.com"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"
                >
                  Log In
                </button>
              </div>
            </form>
            <div
              onClick={props.onLogin}
              className="mt-12 text-sm font-display font-semibold text-gray-700 text-center"
            >
              {`Already have an account? `}
              <span className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
          <img
            src="./businessman.svg"
            alt="businessman"
            className="w-5/6 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
