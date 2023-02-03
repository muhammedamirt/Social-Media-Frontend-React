import React from 'react'
import { Card } from '../../../components/User/Card/Card'
// import ReactPlayer from 'react-player'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'


const VideoCard = ({ video }) => {
  const userId = localStorage.getItem('id')
  return (
    <div>
      <Card>
        <div className=''>
          <div>
            <div className='my-1 flex gap-2'>
              <div className='w-12 h-12 rounded-full overflow-hidden border-2 border-orange-600 shadow-sm shadow-gray-500 '>
                <img src={video?.userId?.picture} alt="avatars" />
              </div>
              <div className='font-bold'>
                <Link to={userId === video?.userId?._id ? '/myprofile' : `/profile/${video?.userId?._id}`}>
                  <h3 className='hover:underline'>{video?.userId?.username}</h3>
                </Link>
                <p className=''>
                  <Moment className="text-xs text-blue-400" fromNow>{video?.createdAt}</Moment>
                </p>
              </div>
            </div>
            <div className='flex justify-center'>
              {/* <ReactPlayer
                width="550px"
                height="450px"
                style={{ background: 'black', borderRadius: '20' }}
                url={video?.url}
                controls
              /> */}
              <video className='w-full' controls >
                <source src={video?.url} />
              </video>
            </div>
            <div className='py-2 px-2'>
              <p>{video?.captions}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default VideoCard