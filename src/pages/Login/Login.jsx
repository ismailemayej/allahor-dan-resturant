import React, { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const { LogIn } = useContext(AuthContext);
  const Navigated = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [desable, setDesable] = useState(true);

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    LogIn(email, password)
      .then((result) => {
        Swal.fire("LogIn Successfully");
        Navigated(from, { replace: true });
      })
      .catch((e) => Swal.fire(e));
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCapcha = (e) => {
    e.preventDefault();
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) === true) {
      setDesable(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Wrong Capta",
        text: "Pleace input the right capta",
      });

      setDesable(true);
    }

    console.log(values);
  };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  return (
    <div className="hero container lg:mx-80">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:1/2 flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
                type="text"
                placeholder="email"
                className="input input-bordered text-white"
              />
              {errors.email && (
                <p className="text-white" role="alert">
                  Email is Required
                </p>
              )}
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                type="text"
                placeholder="password"
                className="input input-bordered text-white"
              />
            </div>
            {errors.password && (
              <p className="text-white" role="alert">
                password is Required
              </p>
            )}
            <div className="form-control ">
              <label className="label">
                <span className="label-text">
                  <LoadCanvasTemplate />
                </span>
              </label>
              <input
                onBlur={handleCapcha}
                name="capcha"
                type="text"
                placeholder="type your Capcha"
                className="input input-bordered text-white"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <p className="text-white">
              Have a Accout?<Link to="/register">Register</Link>
            </p>
            <div className="form-control mt-6">
              <input
                disabled={desable}
                type="submit"
                className="btn btn-primary"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
