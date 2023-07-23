/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { useGetSingleBookQuery } from "../redux/features/book/bookApi";
import Loader from "./shared/Loader";
import { Link } from "react-router-dom";
import { useRemoveWishMutation } from "../redux/features/auth/authApi";
import { toast } from "react-toastify";

const Wish = ({ book }: any) => {
    const { data, isLoading } = useGetSingleBookQuery(book._id, {
        refetchOnMountOrArgChange: true,
    });

    // Move the hook outside of the asynchronous function
    const [removeWishList] = useRemoveWishMutation();
   const bookData = data?.data;
    const onDelete = async () => {
        await removeWishList({ _id: book._id, bookId: bookData._id });
        toast.success("Finished Reading Book");
    };

    if (isLoading) {
        return <Loader />;
    }

 
    return (
        <div className="w-[50%]">
            <div className="flex items-center gap-x-4 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={bookData?.image}
                        alt="Album"
                        className="w-[10rem] h-[15rem]"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{bookData?.title}</h2>
                    <p>Written by: {bookData?.author}</p>
                    <div className="card-actions justify-end mt-8">
                        <button
                            onClick={onDelete}
                            className="btn btn-error text-white"
                        >
                            Remove
                        </button>
                        <Link
                            to={`/book/${bookData?._id}`}
                            className="btn btn-primary text-white"
                        >
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wish;