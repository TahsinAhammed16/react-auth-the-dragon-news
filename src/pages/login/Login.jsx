import Navbar from "../shared/navbar/navbar";
import { Link } from "react-router-dom";

const handleLogin = (e) => {
  e.preventDefault();
  console.log("handle works");
  const email = e.target.email.value;
  console.log(email);
};

const Login = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="bg">
        <h2 className="text-3xl my-10 text-center">Login your account</h2>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter your password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-7 mb-20">
          Don’t have an account ?
          <Link className="text-red-500" to="/register">
            {" "}
            <span className="underline font-semibold">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
