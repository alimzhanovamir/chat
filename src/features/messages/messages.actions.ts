import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";



export const fetchMessages = createAsyncThunk("messages/fetch", async (roomId: string, { getState }) => {
    try {
        const { auth: { token } } = getState() as RootState;
        const res = await fetch(`http://localhost:3000/messages/${roomId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        const messages = await res.json();
        console.log({messages});
        return messages;

    } catch (error) {
        console.error({error});
    }
});