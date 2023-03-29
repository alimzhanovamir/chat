import { MessageType } from './../../screens/room/room';
import { createSlice } from '@reduxjs/toolkit'
import { fetchMessages } from "./messages.actions";

export type MessagesStateType = {
    messages: MessageType[];
}

const messagesState: MessagesStateType = {
    messages: [],
}

export const messagesSlice = createSlice({
    name: "messages",
    initialState: messagesState,
    reducers: {
        addMessage(state, { payload }) {
            state.messages.push(payload);
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchMessages.fulfilled, (state, { payload }) => {
                console.log({ payload });
                
                state.messages = payload;
            });
    }
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer