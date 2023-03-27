import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../application";
import { Header } from "../../features/header/header"

type Chat = {
  id: number;
  name: string;
  user: string;
}

export const MesssagesScreen = () => {
  const { id, ...par } = useParams();
  const { token } = useContext(AppContext);
  const [chatData, setChatData] = useState<Chat>({} as Chat);

  console.log("render", {id, par, chatData});
  

  useEffect(() => {
    getChatById(token, id, setChatData);
  }, [id]);

  return (
    <>
      <Header>{`Чат: ${chatData.name}`}</Header>
      <div>
        Сообщения чата
      </div>
    </>
  )
}

async function getChatById(token: string, chatId: string, setChatData: (chatData: Chat) => void) {
  console.log({ chatId });
  
  try {
    const res = await fetch(`http://localhost:3000/chat/${chatId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    const data = await res.json();
    console.log({data});
    
    setChatData(data);

} catch (error) {
    console.error(error);
}
}