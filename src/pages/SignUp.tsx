/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { useForm } from "react-hook-form";
import { IUser } from "../types/globalTypes";
import { useCreateUserMutation } from "../redux/features/auth/authApi";
import { toast } from "react-toastify";
import Loader from "../components/shared/Loader";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit } = useForm<IUser>();
    const createUserMutation = useCreateUserMutation();
    const [createUser, { isLoading }] = createUserMutation;
    const navigate = useNavigate()
    if (isLoading) {
        return <Loader />;
    }

    const handleSubmitData = async (data: IUser) => {
       try {
           await createUser(data);
           toast.success("User Created!");
           navigate("/");
       } catch (error) {
           toast.error("Something went wrong!");
       }
    };
    return (
        <div className="hero min-h-[80vh]">
            <div className="hero-content flex">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6 w-[80%]">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleSubmitData)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="email"
                                    className="input input-bordered"
                                    {...register("email", {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="password"
                                    {...register("password", {
                                        required: true,
                                    })}
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
