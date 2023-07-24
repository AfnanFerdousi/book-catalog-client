/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link } from "react-router-dom";
import { useGetSingleUserQuery, useRemoveWishMutation } from "../redux/features/auth/authApi";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { IUser } from "../types/globalTypes";

const Wish = ({ book }: { book: any }) => {
      const user = localStorage.getItem("user");
      const user1 = user?.substring(1, user.length - 1);
      const [currentUser, setCurrentUser] = useState<IUser | null>(null);
      const { data: singleUserData, isLoading: isSingleUserLoading } =
          useGetSingleUserQuery(user1 || "");

      // Once the single user data is fetched, update the currentUser state
      useEffect(() => {
          if (!isSingleUserLoading && singleUserData) {
              setCurrentUser(singleUserData.data);
          }
      }, [isSingleUserLoading, singleUserData]);

      // Ensure userId is always a valid string
      const userId = currentUser?._id || "";
console.log(book)

    // Move the hook outside of the asynchronous function
    const [removeWishList] = useRemoveWishMutation();
    const onDelete = async () => {
        await removeWishList({ _id: userId, bookId: book._id });
        toast.success("Finished Reading Book");
        window.location.reload();
    };
  

    return (
        <div className="w-[50%]">
            <div className="flex items-center gap-x-4 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={book?.image}
                        alt="Album"
                        className="w-[10rem] h-[15rem]"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{book?.title}</h2>
                    <p>Written by: {book?.author}</p>
                    <div className="card-actions justify-end mt-8">
                        <button
                            onClick={onDelete}
                            className="btn btn-error text-white"
                        >
                            Remove
                        </button>
                        <Link
                            to={`/book/${book?._id}`}
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
