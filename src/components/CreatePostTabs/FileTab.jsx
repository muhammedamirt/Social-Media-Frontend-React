import { useState } from "react"
import { Card } from "../Card/Card"
// import { sendFileToBack } from '../../api/user'
// import s3FileUpload from 'react-s3'
// window.Buffer = window.Buffer || require("buffer").Buffer;
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";


const S3_BUCKET = 'woulddosocialmedia';
const REGION = 'ap-south-1';
const ACCESS_KEY = 'AKIA6O7PRWWQJQUMHPNJ';
const SECRET_ACCESS_KEY = 'nnizmzW6Y28bR0tnci2M';

// const config = {
//     bucketName: S3_BUCKET,
//     region: REGION,
//     accessKeyId: ACCESS_KEY,
//     secretAccessKey: SECRET_ACCESS_KEY,
// }


const FileTab = () => {


    const [fileUpload, setFileUpload] = useState('')
    const handleUpload = async () => {
        const client = new S3Client({
            region: REGION,
            credentials: {
                accessKeyId: ACCESS_KEY,
                secretAccessKey: SECRET_ACCESS_KEY,
            },
        });

        const params = {
            Bucket:S3_BUCKET,
            Key: "dhsafhsadhfsfhsfhsa",
            Body: fileUpload /** object body */,
        };

        const command = new PutObjectCommand(params);
        const data = await client.send(command);
        console.log(data);
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
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" multipart onChange={(e) => { setFileUpload(e.target.files[0]) }} />
                    </label>
                </div>

            </Card>
            <div className={fileUpload ? "block" : "hidden"}>
                <Card>
                    <div className={fileUpload ? "w-4/5 justify-center ml-14" : "w-4/5 justify-center ml-14 hidden"}>
                        <img src='#' alt="SelectedImage" />
                    </div>
                    <div className="border mt-5 rounded-lg">
                        <textarea placeholder="Write A Caption to your Photo" className='w-full rounded-xl border-heavy-metal-700 border-2'></textarea>
                    </div>
                    <button className="w-full bg-heavy-metal-500 text-white py-3 rounded-lg mt-1 hover:bg-heavy-metal-800" onClick={handleUpload}>Upload</button>
                </Card>
            </div>
        </div>
    )
}

export default FileTab