import { ReactNode } from "react";
import { CreateRoomScreen, RoomScreen } from "./room";
import { AuthScreen } from "./auth/auth";

interface route {
  path: string,
  element: ReactNode,
}

const getRoute = (path: string, element: ReactNode)  => ({ path, element });

export const getRoutes = (): route[] => {
  return [
    getRoute("room/:id", <RoomScreen />),
    getRoute("/auth", <AuthScreen />),
    getRoute("/create", <CreateRoomScreen />),
  ]
}