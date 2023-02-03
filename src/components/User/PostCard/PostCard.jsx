import { useState } from "react";
import { Card } from "../Card/Card"
import { Link } from 'react-router-dom'
// import OutsideClickHandler from 'react-outside-click-handler';
import { commentPost, fetchPostComments, handleLikePost } from "../../../api/postReq";
import Moment from 'react-moment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Comments from "./Comments";
import { useLongPress } from 'use-long-press';
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PostSettings from "./PostSettings";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PostForm = ({ post }) => {
  const userId = localStorage.getItem('id')
  const [dropdown, setDropDown] = useState(false)
  const [likeStatus, setLikeStatus] = useState(post?.likes?.includes(userId))
  const [likeCount, setLikeCount] = useState(post?.likes.length)
  const [commentIsOpen, setCommentIsOpen] = useState(false)
  const [comment, setComment] = useState(null)
  const [commentFormVal, setCommentFormVal] = useState(false)
  const [fetchedComments, setFetchedComments] = useState(null)
  const [longPressed, setLongPressed] = useState(false)
  const [showEmojis, setShowEmojis] = useState(false)

  const handleLongPress = () => {
    if (longPressed) {
      setLongPressed(false)
    }
  }
  const bind = useLongPress(() => {
    setLongPressed(true)
  });


  const handleLike = async (postId) => {
    setLikeStatus(!likeStatus)
    await handleLikePost(postId, userId)
    if (!likeStatus) {
      setLikeCount(likeCount + 1)
    } else {
      setLikeCount(likeCount - 1)
    }
  }

  const handleCommentClick = async (postId) => {
    setCommentIsOpen(true)
    if (!commentIsOpen) {
      const commentsData = await fetchPostComments(postId)
      setFetchedComments(commentsData)
    } else {
      setCommentIsOpen(!commentIsOpen)
    }
  }
  const handleSendComment = async (postId) => {
    setShowEmojis(false)
    const commentData = {
      userId,
      postId,
      comment
    }
    if (comment) {
      if (comment !== "") {
        await commentPost(commentData)
        handleCommentClick(postId)
        setComment('')
      } else {
        setCommentFormVal(true)
      }
    } else {
      setCommentFormVal(true)
    }
  }

  const commentTexting = (e) => {
    setCommentIsOpen(false)
    setCommentFormVal(false)
    setComment(e.target.value)
  }

  return (
    <div>
      <Card>
        <div className="flex gap-3 " key={post?._id}>
          <div>
            <div className='w-12 h-12 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
              <img src={post?.userId?.picture} alt="avatars" />
            </div>
          </div>
          <div className="grow">
            <Link to={userId !== post?.userId?._id ? `/profile/${post?.userId?._id}` : '/myprofile'} className="font-semibold hover:underline cursor-pointer">{post?.userId?.username}</Link>
            <div>
              {/* //moment */}
              <Moment className="text-sm text-blue-400" fromNow>{post?.date}</Moment>
            </div>          </div>
          <div>
            <button onClick={() => setDropDown(!dropdown)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
              </svg>
            </button>

            {/* <OutsideClickHandler onOutsideClick={() => {
              setShowEmojis(false)
            }}>
              <div className="relative">
              </div>
            </OutsideClickHandler> */}
            {dropdown && (
              <PostSettings postData={post} />
            )}
          </div>
        </div>
        <div className="mt-2">
          <div className=" object-cover rounded-md overflow-hidden">
            <img onDoubleClick={() => handleLike(post._id)} className="" src={post?.image} alt="post" />
            {/* <span className="fixed text-red-600">
                  <FavoriteIcon />
            </span> */}
          </div>
          <div className="mt-4 flex gap-3">
            <button className="flex gap-2 items-center" onClick={() => handleLike(post._id)}>
              {likeStatus ?
                <span className="text-red-600">
                  <FavoriteIcon />
                </span>
                : <FavoriteBorderIcon />
              }
              {likeCount}
            </button>
            <button onClick={() => handleCommentClick(post?._id)} className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
              {/* {fetchedComments.length} */}
            </button>
            <button className="flex gap-2 items-center" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
              </svg>
            </button>
          </div>
          <div className="w-full"> 
            <p className="my-1 break-words text-sm">{post?.text}</p>
          </div>
          <div className="flex gap-2">
            <div className="flex gap-3"> 
              {/* <div className='w-12 rounded-full overflow-hidden shadow-sm shadow-gray-500 mt-4'>
                <img src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg" alt="avatars" />
              </div> */}
            </div>
            <div className="flex grow mt-4 relative bg-white rounded-full py-1">
              <span className="py-2 px-2 text-yellow-500 cursor-pointer" onClick={() => setShowEmojis(!showEmojis)}>
                <EmojiEmotionsIcon />
              </span>
              <textarea value={comment} onChange={commentTexting} className="block rounded-full w-full p-2 h-10 px-4 overflow-hidden outline-none" placeholder="Write a comment..."></textarea>

              <button onClick={() => handleSendComment(post?._id)} className="absolute top-2 right-3 my-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            </div>
          </div>
          <div className={showEmojis ? 'w-8/12 flex justify-center block absolute ' : 'hidden'}>
            <Picker data={data} previewPosition="none" onEmojiSelect={
              (e) => {
                setComment(comment + e.native)
              }
            } />
          </div>
          {commentFormVal &&
            <div className="flex w-full justify-center">
              <p className="font-semibold text-red-600 text-sm">Fill the field</p>
            </div>}
          {commentIsOpen &&
            <div {...bind()} onClick={handleLongPress}>
              <Comments data={fetchedComments} longPressed={longPressed} />
            </div>
          }
        </div>
      </Card >

    </div >
  )
}

export default PostForm