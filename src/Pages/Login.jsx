import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn, setUser } = use(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation()
  const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
      const password = e.target.password.value;

      setError("")
      

        signIn(email,password).then(res => {
          setUser(res.user);
          navigate(`${location.state? location.state:"/"}`)
        }).catch(error => {
            setError(error.message);
        })
    }
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="card  bg-base-100 w-full max-w-sm md:max-w-md shrink-0 shadow-2xl">
        <h2 className="border-b border-base-300 text-3xl font-semibold text-center py-12">
          Login your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="font-bold text-[16px]">Email address</label>
            <input
              required
                          name="email"
              type="email"
              className="input bg-base-200 w-full mb-5"
              placeholder="Enter your email address"
            />
            <label className=" font-bold text-[16px]">Password</label>
            <input
              required
                          name="password"
              type="password"
              className="input bg-base-200 mb-5 w-full"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className="text-red-500 text-center my-3 text-[16px] font-semibold">{`${error?error:""}` }</p>
            <p className="text-center my-3 text-[15px]">
              Don't have an account ?
              <Link
                to="/auth/register"
                className="text-bold underline text-secondary"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
