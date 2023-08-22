import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Register = () => {
  const { newUser, UpdateProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    newUser(data.email, data.password)
      .then((result) => {
        Swal.fire("Good job!", "You clicked the button!", "success");
        console.log(result.user);
        UpdateProfile(data.name, data.photoUrl).then(() => {
          Swal.fire("UPDATE!", "User information is updated", "success");
          reset();
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>||Registration</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left text-white">
          <h1 className="text-5xl font-bold">SignUp</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue=""
                {...register("name", { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
                type="text"
                placeholder="Type you Name"
                className="text-white input input-bordered"
              />
              {errors.name && (
                <p className="text-white" role="alert">
                  Name is Required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                defaultValue=""
                {...register("photoUrl", { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
                type="text"
                placeholder="photourl"
                className="text-white input input-bordered"
              />
              {errors.photoUrl && (
                <p className="text-white" role="alert">
                  Photo Url is Required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Eamil</span>
              </label>
              <input
                {...register("email", { required: true })}
                aria-invalid={errors.name ? "true" : "false"}
                type="email"
                placeholder="eamil"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-white" role="alert">
                  email is Required
                </p>
              )}
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                type="password"
                placeholder="password"
                className="text-white input input-bordered"
              />
              {errors.password && (
                <p className="text-white" role="alert">
                  password is Required
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary uppercase">Register</button>
            </div>
            <p className="text-white">
              Have a Accout?<Link to="/login">LogIn</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
