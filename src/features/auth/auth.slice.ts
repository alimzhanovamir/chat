import { createSlice } from '@reduxjs/toolkit'
import { authLogout, authRequest } from "./auth.actions";

export type AuthStateType = {
    token: string | null;
    user: {
        id: string | null;
        name: string | null;
        email: string | null;
    };
}

const authState: AuthStateType = {
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("userData")) || {
        id: null,
        name: null,
        email: null,
    },
}

export const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    extraReducers(builder) {
        builder
            .addCase(authRequest.fulfilled, (state, { payload }) => {
                state.token = payload.token;
                state.user = {
                    id: payload.userData.id,
                    name: payload.userData.username,
                    email: payload.userData.email,
                }
            })
            .addCase(authLogout.fulfilled, (state) => {
                state.token = null;
                state.user = authState.user;
            });
    },
    reducers: undefined
});

export default authSlice.reducer