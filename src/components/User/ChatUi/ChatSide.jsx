import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { userChats } from "../../../api/chatRequist";
import AllUser from "./AllUsers";
import Chat from "./Chat";

const Messages = () => {
    const userId = localStorage.getItem('id')
    const [chat, setChat] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    console.log(userId);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [sentMessage, setSentMessage] = useState(null);
    const [receiveMessages, setReceiveMessages] = useState(null);

    const socket = useRef();
    useEffect(() => {
        console.log(userId, 'userId check');
        socket.current = io("http://localhost:8800");
        socket.current.emit("new-user-add", userId);
        socket.current.on("get-user", (users) => {
            setOnlineUsers(users);
        });
    }, [userId]);

    useEffect(() => {
        if (sentMessage !== null) {
            socket.current.emit("send-message", sentMessage);
        }
    }, [sentMessage]);

    useEffect(() => {
        socket.current.on("receive-message", (data) => {
            setReceiveMessages(data);
        });
    }, []);

    useEffect(() => {
        const getChat = async () => {
            try {
                const { data } = await userChats(userId);
                console.log(data, 'data');
                setChat(data);
            } catch (error) {
                console.log(error);
            }
        };
        getChat();
    }, [userId]);

    return (
        <>
            <div className="h-full ">
                <div className="container mx-auto shadow-lg rounded-lg px-10 max-sm:px-2 max-sm:py-1 h-full ">
                    <div className="flex flex-row pl-5 rounded-lg mb-4 shadow-md bg-snow-drift-100 w-full ">
                        <div className="my-7 flex flex-col  border-r-2 overflow-y-auto bg-white w-4/12">
                            <div className="border-b-2 py-4 px-2 bg-heavy-metal-800 ">
                                <input
                                    type="text"
                                    placeholder="search chatting"
                                    className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                                />
                            </div>
                            <div className="h-[70vh] ">
                                {chat?.map((chat) => (
                                    <div onClick={() => setCurrentChat(chat)}>
                                        <AllUser
                                            data={chat}
                                            currentUserId={userId}
                                            onlineUsers={onlineUsers}
                                            key={chat._id}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-9/12">
                            <Chat
                                key={userId}
                                chat={currentChat}
                                currentUser={userId}
                                setSentMessage={setSentMessage}
                                receiveMessages={receiveMessages}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Messages;
