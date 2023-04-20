import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { $api } from "../../api/api";

export type authDataType = {
    login: string;
    password: string
};

type CreateUserDataType = {
    username: string;
    email: string;
    password: string;
};


const axiosAuthInstance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
});

export const authRequest = createAsyncThunk("auth/login", async (data: authDataType) => {
    console.log("auth/login");

    const response = await axiosAuthInstance.post("auth/login", { email: data.login, password: data.password });


    if (response.status === 401) {
        throw new Error("Неправильный логин или пароль");
    }

    const authData = response.data;
    console.log({ authData });
    
    const { token, userData } = authData;

    localStorage.setItem('token', token);
    localStorage.setItem('userData', JSON.stringify({
        id: userData.id,
        name: userData.username,
        email: userData.email,
    }));

    return authData;
});

export const authLogout = createAsyncThunk("auth/logout", async () => {
    await $api.logout();
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
});


export const createUser = createAsyncThunk("create", async ({ username, email, password }: CreateUserDataType, { dispatch }) => {
    console.log("auth/create");

    const reponse = await axiosAuthInstance.post("auth/signUp", { username, email, password });
    const { userData } = reponse.data;
    console.log({ userData });
    
    dispatch(authRequest({ login: userData.email, password: password }));
});