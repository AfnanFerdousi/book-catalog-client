/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    useEditBookMutation,
    useGetSingleBookQuery,
} from "../redux/features/book/bookApi";
import { toast } from "react-toastify";
import { Inputs } from "../types/globalTypes";
import Loader from "../components/shared/Loader";
import { useForm } from "react-hook-form";

const EditBook = () => {
    const { id } = useParams();
    const [editBook] = useEditBookMutation();
    const { register, handleSubmit, setValue } = useForm<Inputs>();

    if (!id) {
        return null;
    }

    const { data, isLoading } = useGetSingleBookQuery(id);
    if (isLoading) {
        return <Loader />;
    }
    useEffect(() => {
        if (data) {
            setValue("title", data?.data?.title);
            setValue("author", data?.data?.author);
            setValue("genre", data?.data?.genre);
            setValue("description", data?.data?.description);
            setValue("image", data?.data?.image);
            setValue("publishedAt", data?.data?.publishedAt);
       }
    }, [data, setValue]);

    const onSubmit = async (data: Inputs) => {
        await editBook({ body: data, id: id });

        toast.success("Book Edited!");
    };
    return (
        <div className="px-12">
            <h2 className="text-4xl font-bold py-8 text-center">Edit Book</h2>
            <div className="flex gap-x-4">
                <div>
                    <img src={data?.data?.image} alt="img" />
                </div>

                <form
                    className="w-full text-center flex flex-col items-center bg-base-200 shadow-md p-4 rounded-lg"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">
                                Book Title
                            </span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-2xl"
                            placeholder="Book Title"
                            {...register("title", { required: true })}
                        />
                    </div>
                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">
                                Book Author
                            </span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-2xl"
                            placeholder="Book Author"
                            {...register("author", { required: true })}
                        />
                    </div>
                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">
                                Book Genre
                            </span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-2xl"
                            placeholder="Book Genre"
                            {...register("genre", { required: true })}
                        />
                    </div>
                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">
                                Book Description
                            </span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-2xl"
                            placeholder="Book Description"
                            {...register("description", { required: true })}
                        />
                    </div>
                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">
                                Book Image
                            </span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-2xl"
                            placeholder="Book Image"
                            {...register("image", { required: true })}
                        />
                    </div>
                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text font-semibold text-gray-700">
                                Book Published At
                            </span>
                        </label>
                        <input
                            type="text"
                            className="input input-bordered w-full max-w-2xl"
                            placeholder="Book Published At"
                            {...register("publishedAt", { required: true })}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary text-white font-bold mt-8 w-96">Edit</button>
                </form>
            </div>
        </div>
    );
};

export default EditBook;
