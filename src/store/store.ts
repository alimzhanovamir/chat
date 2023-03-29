import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/auth/auth.slice"
import messagesSlice from "../features/messages/messages.slice";
import roomSlice from "../features/room/room.slice";
import roomsSlice from "../features/side-bar/_rooms/rooms.slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        rooms: roomsSlice,
        room: roomSlice,
        messages: messagesSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch