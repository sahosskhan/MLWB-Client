// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Firebase/AuthProvider";

const SignIn = () => {
  const { signIn, googleLogin, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  if (loading) {
    return (
      <span className="lg:mx-[600px] mx-[200px] my-[100px] loading loading-infinity loading-lg"></span>
    );
  }
  const Google = () => {
    googleLogin()
      .then((result) => {
        Swal.fire({
          title: "Wow!",
          text: "You Sign In with Google Sucessfully",
          icon: "success",
          confirmButtonText: "Done",
        });
        console.log(result.user);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const HandleLogin = (e) => {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);
    console.log(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Wow!",
          text: "You Sign In Sucessfully",
          icon: "success",
          confirmButtonText: "Done",
        });

        navigate(location?.state ? location?.state : "/");
      })
      .catch((err) => {
        console.log(err);
        setError("Oops! Password is not correct please try again.");
      });
  };

  return (
    <div className="my-24 ">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden  rounded-xl shadow-2xl lg:max-w-[1600px]">
        <div
          className="hidden bg-cover lg:block lg:w-[70%]"
          style={{
            backgroundImage: `url('https://i.ibb.co/j3f5cYZ/img-122803-media-and-entertainment.jpg')`,
          }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-24 rounded-full"
              src="https://i.ibb.co/grXsX0G/logo.webp"
              alt=""
            />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome, Sign In Here!.
          </p>

          <button
            onClick={Google}
            className=" w-full flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="px-4 py-2">
              <img
                className="w-auto h-8"
                src="https://i.ibb.co/2dTmxR9/google-icon-2048x2048-czn3g8x8.png"
                alt=""
              />
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </button>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or login with email
            </a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          {/* login from */}
          <div>
            <form onSubmit={HandleLogin}>
              <div className="mt-4 form-control">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Email Address
                </label>
                <input
                  id="LoggingEmailAddress"
                  name="email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
              </div>

              <div className="mt-4 form-control">
                <div className="flex justify-between">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                    Password
                  </label>

                  <a
                    href="#"
                    className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                  >
                    Forget Password?
                  </a>
                </div>

                <input
                  id="loggingPassword"
                  name="password"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                />
              </div>
              {error && (
                <p className="text-red-700 font-bold mt-5  ">
                  {" "}
                  <i className="fa-solid fa-triangle-exclamation"></i> {error}
                </p>
              )}
              <div className="mt-6 form-control">
                <button className="w-full px-6 py-3 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                  LogIn
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              ALready Have An Account
            </a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <div className="mt-6">
            <Link to="/register">
              <button className="w-full mt-4 px-6 py-3 text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
                SignUp
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
