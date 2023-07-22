import { IUserApiData } from '../../../types/globalTypes';
import api from './../../api/apiSlice';

const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        createUser: build.mutation({
            query: (user: IUserApiData) => ({
                url: '/auth/signup',
                method: 'POST',
                body: user,
                credentials: 'include',
            }),
        }),
    }),
})

export const { useCreateUserMutation } = authApi