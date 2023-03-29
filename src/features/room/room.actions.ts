import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";



export const fetchRoomInfo = createAsyncThunk("room/fetch", async (roomId: number, { getState }) => {
    console.log("room/fetch");
    
    try {
        const { auth: { token } } = getState() as RootState;
        const res = await fetch(`http://localhost:3000/room/${roomId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        const roomInfo = await res.json();
        console.log({roomInfo});
        return roomInfo;

    } catch (error) {
        console.error(error);
    }
});