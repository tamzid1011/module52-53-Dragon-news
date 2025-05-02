import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((res) => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...(res.user), displayName: name, photoURL: photo });
            navigate("/")
          })
          .catch((error) => {
            console.log(error);
            setUser(res.user)
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="card  bg-base-100 w-full max-w-sm md:max-w-md shrink-0 shadow-2xl">
        <h2 className="border-b border-base-300 text-3xl font-semibold text-center py-12">
          Register your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset">
            {/* name  */}
            <label className="font-bold text-[16px]">Name</label>
            <input
              name="name"
              required
              type="text"
              className="input bg-base-200 w-full mb-5"
              placeholder="Enter your name"
            />

            {/* Photo URL  */}
            <label className="font-bold text-[16px]">Photo URL</label>
            <input
              name="photo"
              required
              type="text"
              className="input bg-base-200 w-full mb-5"
              placeholder="Enter your Photo URL"
            />

            {/* email  */}
            <label className="font-bold text-[16px]">Email address</label>
            <input
              name="email"
              required
              type="email"
              className="input bg-base-200 w-full mb-5"
              placeholder="Enter your email address"
            />

            {/* password  */}
            <label className=" font-bold text-[16px]">Password</label>
            <input
              name="password"
              required
              type="password"
              className="input bg-base-200 mb-5 w-full"
              placeholder="Password"
            />

            {/* checkBox  */}
            <label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              Remember me
            </label>

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="text-center my-3 text-[15px]">
              Already have an account ?
              <Link
                to="/auth/login"
                className="text-bold underline text-secondary"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
