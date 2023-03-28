import { ReactNode } from "react";
import { RoomScreen, CreateRoomScreen } from "./room";
import { ProfileScreen } from "./profile/profile";
import { AuthScreen } from "./auth/auth";

interface route {
  path: string,
  element: ReactNode,
}

const getRoute = (path: string, element: ReactNode)  => ({ path, element });

export const getRoutes = (): route[] => {
  return [
    // getRoute("/", <MesssagesScreen />),
    getRoute("room/:id", <RoomScreen />),
    getRoute("/profile", <ProfileScreen />),
    getRoute("/auth", <AuthScreen />),
    getRoute("/create", <CreateRoomScreen />),
  ]
}