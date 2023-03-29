import { RootState } from '../../../store/store';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRooms = createAsyncThunk("rooms/fetch", async (_, { getState }) => {
    console.log("rooms/fetch");
    
    try {
        const { auth: { token } } = getState() as RootState;
        const res = await fetch("http://localhost:3000/rooms", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        const rooms = await res.json();
        console.log({rooms});
        return rooms;

    } catch (error) {
        console.error(error);
    }
});