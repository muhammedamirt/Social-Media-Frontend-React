import React, { useEffect, useRef, useState } from "react";
import { addMessage, getMessages } from "../../../api/messageReq";
import { fetchOneUserProfile } from "../../../api/user"; 
import InputEmoji from "react-input-emoji";

const Chat = ({ chat, currentUser, setSentMessage, receiveMessages }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState("");
  const scroll = useRef();

  useEffect(() => {
    if (receiveMessages !== null && receiveMessages.chatId === chat?._id) {
      setMessages([...messages, receiveMessages]);
    }
  }, [receiveMessages]);

  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      const data = await fetchOneUserProfile(userId);
      console.log(data,'userData');
      setUserData(data);
    };
    if (chat != null) {
      getUserData();
    }
  }, [chat, currentUser]);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const {data} = await getMessages(chat?._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessage();
  }, [chat, currentUser]);

  const changeMessage = (message) => {
    setNewMessages(message);
  };
  const handlePostMessage = async () => {
    if (newMessages) {
      const messageAdd = {
        senderId: currentUser,
        text: newMessages,
        chatId: chat._id,
      };

      try {
        const {data} = await addMessage(messageAdd);
        console.log(data);
        setMessages([...messages, data]);
        setNewMessages("");
      } catch (error) {
        console.log(error);
      }

      const receiverId = chat.members.find((id) => id !== currentUser);
      setSentMessage({ ...messageAdd, receiverId });
    }
  };

  useEffect(() => {
    scroll?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {chat ? (
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full ">
                <div className="flex flex-col w-full bg-black ">
                  <div className=" border-b-2 py-2 px-2 w-full bg-slate-700 h-16 flex items-center">
                    <img
                      src={userData?.picture}
                      className="object-cover h-10 w-10 rounded-full"
                      alt=""
                    />
                    <div className="text-white  p-3 text-lg font-semibold">
                      {userData?.username}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-y-2 h-[60vh] w-full  overflow-y-scroll ">
                  {messages.map((message) =>
                    message.senderId === currentUser ? (
                      <div
                        ref={scroll}
                        className="col-start-6 col-end-13 p-3 rounded-lg"
                      >
                        <div className="flex items-center justify-start flex-row-reverse">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          A
                          </div>
                          <div className="max-w-2xl relative mr-3 text-sm bg-indigo-100 py-2 max-w-10 px-4 shadow rounded-xl">
                            <div className="flex flex-wrap">
                              <p>{message.text}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        ref={scroll}
                        className="col-start-1 col-end-7 p-3 rounded-lg"
                      >
                        <div className="flex flex-row items-center">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                            A
                          </div>
                          <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                            <div>{message.text}</div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              <div>
                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <InputEmoji
                    value={newMessages}
                    onChange={changeMessage}
                    cleanOnEnter
                    onEnter={handlePostMessage}
                    placeholder="Type "
                  />
                </div>
              </div>
              <div className="ml-4">
                <button
                  onClick={handlePostMessage}
                  className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                >
                  <span>Send</span>
                  <span className="ml-2">
                    <svg
                      className="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center py-56">
          <span>tap on chat to start conversation</span>
        </div>
      )}
    </>
  );
};

export default Chat;

