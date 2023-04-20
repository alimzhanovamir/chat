import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../api/api";


export const fetchMessages = createAsyncThunk("messages/fetch", async (roomId: string) => {
    try {
        const messages = await $api.getMessagesByRoomId(roomId);
        console.log({messages});
        
        return messages;

    } catch (error) {
        console.error({error});
    }
});