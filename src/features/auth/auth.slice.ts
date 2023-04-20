import { createSlice } from '@reduxjs/toolkit'
import { authLogout, authRequest } from "./auth.actions";

export type AuthStateType = {
    token: string | null;
    user: {
        id: string | null;
        name: string | null;
        email: string | null;
    };
    error: string | null;
}

const authState: AuthStateType = {
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("userData")) || {
        id: null,
        name: null,
        email: null,
    },
    error: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        removeAuthError(state) {
            state.error = null;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(authRequest.fulfilled, (state, { payload }) => {
                console.log(payload);
                state.token = payload.token;
                state.user = {
                    id: payload.userData.id,
                    name: payload.userData.username,
                    email: payload.userData.email,
                }
            })
            .addCase(authRequest.rejected, (state, action) => {
                console.log(action);
                
                state.error = "Неправильный логин или пароль";
            })
            .addCase(authLogout.fulfilled, (state) => {
                state.token = null;
                state.user = authState.user;
            });
    }
});

export const { removeAuthError } = authSlice.actions;

export default authSlice.reducer