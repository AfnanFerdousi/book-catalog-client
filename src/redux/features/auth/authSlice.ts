import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

export interface IUser {
    user: {
        email: string;
        password: string;
        wishlist?: IBook[];
    } | null;
    token: string | null;
}

interface ICredentials {
    user: {
        email: string;
        password: string;
    } | null;
    accessToken: string | null;
}

const initialState: IUser = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<ICredentials>) => {
            const { user, accessToken } = action.payload;
            state.user = user;
            state.token = accessToken;
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: { auth: IUser }) => state.auth.user;
export const selectCurrentUserToken = (state: { auth: IUser }) =>
    state.auth.token;
