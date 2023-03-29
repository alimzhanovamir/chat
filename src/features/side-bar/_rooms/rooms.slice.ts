import { createSlice } from '@reduxjs/toolkit'
import { RoomType } from "./rooms";
import { fetchRooms } from "./rooms.actions";

export type RoomsStateType = {
    rooms: RoomType[];
}

const roomsState: RoomsStateType = {
    rooms: [],
}

export const roomsSlice = createSlice({
    name: "rooms",
    initialState: roomsState,
    extraReducers(builder) {
        builder
            .addCase(fetchRooms.fulfilled, (state, { payload }) => {
                state.rooms = payload;
            });
    },
    reducers: undefined
});

export default roomsSlice.reducer