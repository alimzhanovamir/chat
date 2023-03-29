import { createSlice } from '@reduxjs/toolkit'
import { fetchRoomInfo } from "./room.actions";

export type RoomStateType = {
    id: number;
    name: string;
    user: string;
}

const roomState: RoomStateType = {
    id: null,
    name: null,
    user: null,
}

export const roomSlice = createSlice({
    name: "messages",
    initialState: roomState,
    reducers: undefined,
    extraReducers(builder) {
        builder
            .addCase(fetchRoomInfo.fulfilled, (state, { payload }) => {
                state.id = payload.id;
                state.name = payload.name;
                state.user = payload.user;
            });
    }
});

export default roomSlice.reducer