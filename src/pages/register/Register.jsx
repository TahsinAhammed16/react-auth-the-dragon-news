import Navbar from "../shared/navbar/navbar";
import { Link } from "react-router-dom";

const handleRegister = (e) => {
  e.preventDefault();
  console.log("handle works");
  const email = e.target.email.value;
  console.log(email);
};

const Register = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="bg">
        <h2 className="text-3xl my-10 text-center">Login your account</h2>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="url"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="mt-5 flex items-center">
            <input type="checkbox" name="checkbox" id="" required />
            <span className="ml-2 text-sm">Accept Term & Conditions</span>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center mt-7 mb-20">
          Don’t have an account ?
          <Link className="text-red-500" to="/login">
            {" "}
            <span className="underline font-semibold">login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
