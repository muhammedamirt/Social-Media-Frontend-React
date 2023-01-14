import { followUser } from "../../../api/user"

export const handleFollowUser =async (isFollowed,userId,myId) => {
    if(isFollowed){
       let response =await followUser()
       console.log(response);
    }else{

    }
}