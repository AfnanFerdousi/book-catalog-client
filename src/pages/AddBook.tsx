/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react-hooks/rules-of-hooks */
import { useCreateBookMutation } from "../redux/features/book/bookApi";
import { toast } from "react-toastify";
import { Inputs } from "../types/globalTypes";
import { useForm } from "react-hook-form";

const AddBook = () => {
    const [createBook] = useCreateBookMutation();
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit = async (data: Inputs) => {
        await createBook(data);
        console.log(data)
        toast.success("Book Created!");
    };
    return (
        <div className="px-12">
            <h2 className="text-4xl font-bold py-8 text-center">Add Book</h2>
            <div className="">
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

                    <button
                        type="submit"
                        className="btn btn-primary text-white font-bold mt-8 w-96"
                    >
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;
