import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { fetchRooms } from "../side-bar/_rooms/rooms.actions";
import { $api } from "../../api/api";


type createRoomType = {
    roomName: string,
    navigate: any,
};


export const createRoom = createAsyncThunk("room/create", async ({roomName, navigate}: createRoomType, { getState, dispatch }) => {
    const { auth: { user } } = getState() as RootState;

    const { id } = await $api.createRoom(roomName, user.email);
    
    await dispatch(fetchRooms());

    navigate(`/room/${id}`)
});