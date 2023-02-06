import React, { useEffect, useState } from "react";
import { fetchOneUserProfile } from "../../../api/user";

const AllUser = ({ data, currentUserId, onlineUsers}) => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const userId = data?.members.find((id) => id !== currentUserId);
        const getUserData = async () => {
            const data = await fetchOneUserProfile(userId);
            setUserData(data);
        };
        getUserData();
    }, []);

    return (
        <>
            <div className=" flex flex-row py-4 px-2 mx-1 h-full justify-center items-center border-b-2 hover:bg-snow-drift-200">
               
                <div className="">
                    <img
                        src={userData?.picture}
                        className="object-cover w-12 h-10 rounded-full"
                        alt=""
                    />
                </div>
                <div className="w-full ml-5">
                    <div className="text-lg font-semibold">{userData?.first_name} {userData?.last_name}</div>
                    {onlineUsers.map((item) => (item.userId === userData?._id && <span className="text-gray-500">{onlineUsers.length > 1 ? "online" : ""}</span>
                    ))}
                </div>
            </div>
            <hr />
        </>
    );
};

export default AllUser;
