import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { userChats } from "../../../api/chatRequist";
import AllUser from "./AllUsers";
import Chat from "./Chat";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useDispatch } from "react-redux";
import { routeChanged } from "../../../redux/topLoadingBar";
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';


const Messages = () => {
    const userId = localStorage.getItem('id')
    const [chat, setChat] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [sentMessage, setSentMessage] = useState(null);
    const [receiveMessages, setReceiveMessages] = useState(null);
    const [phoneSizeUser, setPhoneSizeUser] = useState(" lg:inline-block")
    const [phoneSizeChat, setPhoneSizeChat] = useState("hidden lg:inline-block")
    const [backButton, setBackButton] = useState(true)
    const [backFromMessage, setBackFromMessage] = useState(false)
    const socket = useRef();
    const dispatch = useDispatch()
    useEffect(() => {
        socket.current = io("https://wouldosocket.iworldecart.shop");
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
        dispatch(routeChanged())
        const getChat = async () => {
            try {
                const { data } = await userChats(userId);
                setChat(data);
            } catch (error) {
                console.log(error);
            }
        };
        getChat();
    }, [userId]);

    const clickUser = (chat) => {
        setCurrentChat(chat)
        setPhoneSizeUser("hidden lg:flex")
        setPhoneSizeChat(" lg:flex")
        setBackFromMessage(true)
        setBackButton(false)
    }

    return (
        <>
            <div className="h-full ">
                <div className="container mx-auto shadow-lg rounded-lg px-10 max-sm:px-2 max-sm:py-1 h-full ">
                    {<Link to={-1} >
                        <button className='bg-snow-drift-100 shadow-md hover:bg-snow-drift-200 shadow-heavy-metal-500 text-heavy-metal-900 py-1 px-4 mb-5 rounded-xl'>
                            <div className='flex gap-2'>
                                <KeyboardArrowLeftIcon />
                                Back
                            </div>
                        </button>
                    </Link>}
                    <div className="flex flex-row md:pl-5 rounded-lg mb-4 shadow-md bg-snow-drift-200 w-full ">
                        <div className={`${phoneSizeUser} lg:my-7 flex flex-col rounded-t-xl  border-r-2 overflow-y-auto bg-white w-full lg:w-4/12`}>
                            <div className="border-b-2 py-4 px-2 bg-heavy-metal-800 rounded-t-lg">
                                <div className="flex w-full rounded-2xl bg-snow-drift-50">
                                    <input
                                        type="text"
                                        placeholder="search chatting"
                                        className="py-2 px-2 outline-none rounded-l-2xl w-5/6"
                                    />
                                    <div className="py-2 px-3">
                                        <SearchIcon />
                                    </div>
                                </div>
                            </div>
                            <div className="h-96  overflow-y-scroll  scrollbar-hide">
                                {chat?.length !== 0 ?
                                    chat?.map((chat) => (
                                        <div onClick={() => clickUser(chat)}>
                                            <AllUser
                                                data={chat}
                                                currentUserId={userId}
                                                onlineUsers={onlineUsers}
                                                key={chat._id}
                                            />
                                        </div>
                                    ))

                                    : <div className="flex justify-center items-center">
                                        <div>
                                            <div className="flex justify-center ">
                                                <CommentsDisabledIcon />
                                            </div>
                                            <span>
                                                <p>No Chats</p>
                                            </span>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                        <div className={`${phoneSizeChat} lg:w-9/12 w-full`}>
                            <Chat
                                key={userId}
                                chat={currentChat}
                                currentUser={userId}
                                setSentMessage={setSentMessage}
                                receiveMessages={receiveMessages}
                                setPhoneSizeUser={setPhoneSizeUser}
                                setPhoneSizeChat={setPhoneSizeChat}
                                setBackButton={setBackButton}
                                backFromMessage={backFromMessage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Messages;
