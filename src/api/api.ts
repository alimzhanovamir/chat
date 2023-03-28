


export async function createChat(token: string, chatname: string, useremail: string) {
    try {
        const res = await fetch('http://localhost:3000/room', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: chatname,
                user: useremail,
            }),
        });

        if (res.ok) {
            const { id } = await res.json();

            return id;
        }
    } catch (error) {
        console.error(error);
    }
}