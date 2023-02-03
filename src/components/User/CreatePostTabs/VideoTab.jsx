import { Card } from "../Card/Card"
import { Alert } from "@mui/material";
import { useState } from "react";
import ReactPlayer from 'react-player'
import AWS from "aws-sdk";
import { uploadVideoFileAPI } from "../../../api/user";

const s3 = new AWS.S3({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_REGION,
});

const VideoTab = () => {
  const userId = localStorage.getItem('id')
  const [videoValidate, setVideoValidate] = useState(false)
  const [fileUpload, setFileUpload] = useState('')
  const [captions, setCaptions] = useState('')
  const allowedExtensions = /(\.mp4)$/i;

  const handleInputChange = (e) => {
    let video = e.target.files[0]
    if (!allowedExtensions.exec(video.name)) {
      setVideoValidate(true)
    } else {
      setFileUpload(video);
    }
  }

  const handleUpload = async () => {
    try {
      const fileContent = new Blob([fileUpload]);
      const params = {
        Bucket: process.env.REACT_APP_NAME,
        Key: `video/${fileUpload.name}`,
        Body: fileContent,
      };
      const result = await s3.upload(params).promise();
      const url = result?.Location;
      console.log(result?.Location);
      // const url = "https://connect-with-post.s3.ap-south-1.amazonaws.com/shorts/Sample%20Videos%20-%20Dummy%20Videos%20For%20Demo%20Use%20%282%29.mp4";
      const response = await uploadVideoFileAPI({ url, captions, userId })
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Card>
        <div className="flex items-center justify-center w-full">
          <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Only mp4 Allowed!</p>
              {videoValidate && <Alert className="mt-5" severity="error">Only mp4 Allowed!</Alert>}
            </div>
            <input id="dropzone-file" type="file" className="hidden" multipart onChange={handleInputChange} />
          </label>
        </div>

      </Card>
      <div className={fileUpload ? "block" : "hidden"}>
        <Card>
          {fileUpload ?
            <div>
              <div className={fileUpload ? "w-4/5 flex justify-center md:ml-14" : " w-4/5 justify-center md:ml-14 hidden"}>
                <video width="400" controls>
                  <source src={URL.createObjectURL(fileUpload)} />
                </video>
              </div>
            </div> : null
          }
          <div className="border mt-5 rounded-lg">
            <textarea value={captions} onChange={(e) => setCaptions(e.target.value)} placeholder="Say Something..." className='w-full px-5 pt-1 rounded-xl border-heavy-metal-700 border-2'></textarea>
          </div>
          <button className="w-full bg-heavy-metal-500 text-white py-3 rounded-lg mt-1 hover:bg-heavy-metal-800" onClick={handleUpload}>Upload</button>
        </Card>
      </div>
    </div>
  )
}

export default VideoTab