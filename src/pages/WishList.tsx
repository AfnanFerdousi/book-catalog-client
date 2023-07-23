/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
    useGetSingleUserQuery,
    useGetWishListQuery,
} from "../redux/features/auth/authApi";
import { useState, useEffect } from "react";
import { IBook, IUser } from "../types/globalTypes";
import Loader from "../components/shared/Loader";
import Wish from "../components/Wish";

const WishList = () => {
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

    const { data: wishListData, isLoading: isWishListLoading } =
        useGetWishListQuery(userId, {
            refetchOnMountOrArgChange: true,
        });

    if (isSingleUserLoading || isWishListLoading) {
        return <Loader />;
    }

    console.log(wishListData);

    // You can use the wishListData here

    return (
        <div className="px-12">
            <h2 className="text-4xl font-bold py-8 text-center">
                My Wish List
            </h2>
            <div className="mx-auto flex flex-col justify-center items-center gap-4">
                {wishListData?.data?.wishList &&
                    wishListData?.data?.wishList.map((book: IBook) => (
                        <Wish key={book._id} book={book} />
                    ))}
            </div>
        </div>
    );
};

export default WishList;
