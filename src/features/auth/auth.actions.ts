import { createAsyncThunk } from "@reduxjs/toolkit";

export type authDataType = {
    login: string;
    password: string
};

export const authRequest = createAsyncThunk("auth/login", async (data: authDataType) => {
    console.log("auth/login");
    
    try {
        const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: data.login, password: data.password }),
        });
        const responseData = await response.json();
        const { token, userData } = responseData;

        localStorage.setItem('token', token);
        localStorage.setItem('userData', JSON.stringify({
            id: userData.id,
            name: userData.username,
            email: userData.email,
        }));

        return responseData;
    } catch (error) {
        console.error(error); 
    }
});

export const authLogout = createAsyncThunk("auth/logout", () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
});