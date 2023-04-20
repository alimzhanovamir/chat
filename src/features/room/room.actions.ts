import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../api/api";



export const fetchRoomInfo = createAsyncThunk("room/fetch", async (roomId: number, { getState }) => {
    console.log("room/fetch");

    const roomInfo = await $api.getRoomInfo(roomId);
    console.log({roomInfo});
    return roomInfo;
});