// authApi.ts

// Import necessary dependencies and types
import { IUserApiData } from "../../../types/globalTypes";
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
            // The query function receives the user's email and password and returns the fetch configuration
            query: ({ email, password }) => ({
                url: "/auth/login",
                method: "POST",
                body: { email, password },
            }),
        }),
    }),
});

// Export the generated hooks
export const { useCreateUserMutation, useLoginUserMutation } = authApi;
