import { RootState } from '../../../store/store';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authLogout } from "../../auth/auth.actions";
import { $api } from "../../../api/api";

export const fetchRooms = createAsyncThunk("rooms/fetch", async (_, { getState, dispatch }) => {
    console.log("rooms/fetch");

    const rooms = await $api.getRooms();
    console.log({rooms});
    
    return rooms;
});