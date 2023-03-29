import { createAsyncThunk } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";
import { RootState } from "../../store/store";
import { fetchRooms } from "../side-bar/_rooms/rooms.actions";


type createRoomType = {
    roomName: string,
    navigate: any,
};

export const createRoom = createAsyncThunk("room/create", async ({roomName, navigate}: createRoomType, { getState, dispatch }) => {
    try {
        const { auth: { token, user } } = getState() as RootState;
        const response = await fetch('http://localhost:3000/room', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: roomName,
                user: user.email,
            }),
        });

        const { id } = await response.json();
        console.log({id});
        
        await dispatch(fetchRooms());
        navigate(`/room/${id}`)
    } catch (error) {
        console.error(error);
    }
});