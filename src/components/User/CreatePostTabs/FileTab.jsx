import { useState } from "react"
import S3 from "aws-sdk/clients/s3";
import { Card } from "../Card/Card"
import { createImagePost } from "../../../api/postReq";
import { useNavigate } from "react-router-dom";
import { Alert, CircularProgress } from "@mui/material";
window.Buffer = window.Buffer || require("buffer").Buffer;

const S3_BUCKET = process.env.REACT_APP_NAME
const accessKeyId = process.env.REACT_APP_ACCESS_KEY_ID
const region = process.env.REACT_APP_REGION
const secretAccessKey = process.env.REACT_APP_SECRET_ACCESS_KEY

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})
const FileTab = () => {
    const [fileUpload, setFileUpload] = useState('')
    const [captions, setCaptions] = useState('')
    const [imgValidate, setImgValidate] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const userId = localStorage.getItem('id')

    const handleInputChange = (e) => {
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        const feed = e.target.files[0]
        if (!allowedExtensions.exec(feed.name)) {
            console.log('not a image');
            setImgValidate(true)
        } else {
            setImgValidate(false)
            setFileUpload(feed);
        }
        //  setFileUpload(e.target.files[0])
    }


    const handleUpload = async () => {
        const reader = new FileReader()
        reader.readAsArrayBuffer(fileUpload)
        reader.onload = async (e) => {
            const result = e.target.result
            const uploadParams = {
                Bucket: S3_BUCKET,
                Key: fileUpload.name,
                Body: result
            }
            s3.upload(uploadParams).promise().then(async (res) => {
                setLoading(true)
                const data = await createImagePost({ image: res.Location, captions }, userId)
                if (data.status) {
                setLoading(false)
                    navigate('/myprofile')
                }
            }).catch((err) => {
                console.log(err);
            })
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
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            {imgValidate && <Alert className="mt-5" severity="error">Only SVG, PNG, JPG or GIF Allowed!</Alert>
                            }
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" multipart onChange={handleInputChange} />
                    </label>
                </div>

            </Card>
            <div className={fileUpload ? "block" : "hidden"}>
                <Card>
                    {fileUpload ?
                        <div>
                            <div className={fileUpload ? "w-4/5 justify-center md:ml-14" : "w-4/5 justify-center md:ml-14 hidden"}>
                                <img src={URL.createObjectURL(fileUpload)} alt="SelectedImage" />
                            </div>
                        </div> : null
                    }
                    <div className="border mt-5 rounded-lg">
                        <textarea value={captions} onChange={(e) => setCaptions(e.target.value)} placeholder="Say Something..." className='w-full px-5 pt-1 rounded-xl border-heavy-metal-700 border-2'></textarea>
                    </div>
                    {loading &&
                        <div className="flex justify-center">
                            <CircularProgress color="success"/>
                        </div>}
                    {!loading && <button className="w-full bg-heavy-metal-500 text-white py-3 rounded-lg mt-1 hover:bg-heavy-metal-800" onClick={handleUpload}>Upload</button>}
                </Card>
            </div>
        </div>
    )
}

export default FileTab