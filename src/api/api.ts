import axios from "axios";



type RoomType = {
    id: string,
    name: string,
    owner: string,
};

const API_URL = 'http://localhost:3000';

export const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
});


axiosInstance.interceptors.request.use(
    async (config) => {
        console.log("INTERCEPTOR REQUEST");

        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    async (config) => {
        console.log("INTERCEPTOR RESPONSE");
        return config
    },
    async (error) => {
        const originalRequest = error.config;
        console.log(error.response.status);
        
        if (error.response.status === 401) {
            try {
                console.log("INTERCEPTOR RESPONSE 401");
                
                const response = await axios.get(`${API_URL}/auth/refreshToken`, {  withCredentials: true });
                
                if (response.status === 401) {
                    window.location.href = '/';
                    throw new Error("Рефреш токен не валиден");
                }

                localStorage.setItem('token', response.data.accessToken);

                originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;

                return axios.request(originalRequest);
            } catch (error) {
                console.log("Пользователь не авторизован", error);
            }
        }
    }
)

const checkAuth = async () => {
    try {
        const response = axios.get(`${API_URL}/auth/refreshToken`, {  withCredentials: true });
        return response;
    } catch (error) {
        console.error(error?.data?.message)
    }
}

const getMessagesByRoomId = async (roomId: string) => {
    try {
        const response = await axiosInstance.get(`/messages/${roomId}`);
        console.log("try");
        
        return response.data;
    } catch (error) {
        console.log("catch", error);
        return error.response.data;
    }
    
}

const createRoom = async (roomName: string, owner: string): Promise<RoomType> => {
    try {
        const response = await axiosInstance.post(`/room`, { name: roomName, owner });
        return response.data;
    } catch (error) {
        console.error(error?.data?.message)
    }
}

const getRoomInfo = async (roomId: number) => {
    try {
        const response = await axiosInstance.get(`/room/${roomId}`);
        return response.data;
    } catch (error) {
        console.error(error?.data?.message)
    }
}

const getRooms = async () => {
    try {
        const response = await axiosInstance.get(`/rooms`);
        return response.data;
    } catch (error) {
        console.error(error?.data?.message)
    }
}

export const $api = {
    checkAuth,
    getMessagesByRoomId,
    createRoom,
    getRoomInfo,
    getRooms,
};



