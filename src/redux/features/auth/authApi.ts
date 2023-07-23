// authApi.ts

// Import necessary dependencies and types
import { IBook, IUserApiData } from "../../../types/globalTypes";
import api from "./../../api/apiSlice";

// Define the authApi and its endpoints
const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        createUser: build.mutation<IUserApiData, IUserApiData>({
            // The query function receives user data and returns the fetch configuration
            query: (user) => ({
                url: "/auth/signup",
                method: "POST",
                body: user,
            }),
        }),
        loginUser: build.mutation<
            IUserApiData,
            { email: string; password: string }
        >({
            query: ({ email, password }) => ({
                url: "/auth/login",
                method: "POST",
                body: { email, password },
            }),
        }),
        addToWishList: build.mutation({
            query: ({ _id, book }: { _id: string; book: IBook }) => ({
                url: `/auth/add-to-wish/${_id}`,
                method: "PATCH",
                body: { _id, book },
            }),
        }),
        getSingleUser: build.query({
            query: (id: string) => ({
                url: `/auth/user/${id}`,
            }),
        }),
        getWishList: build.query({
            query: (id: string) => ({
                url: `/auth/wishlist/${id}`,
            }),
        }),
    }),
});

// Export the generated hooks
export const {
    useCreateUserMutation,
    useLoginUserMutation,
    useGetWishListQuery,
    useAddToWishListMutation,
    useGetSingleUserQuery,
} = authApi;
