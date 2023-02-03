import { getQrUrlAPI, userLogoutAPI } from "../../../api/user"
import { Card } from "../Card/Card"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link, useNavigate } from "react-router-dom";
import BookmarkIcon from '@mui/icons-material/Bookmark';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import LockIcon from '@mui/icons-material/Lock';
// import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CircularProgress from '@mui/material/CircularProgress';
import { Alert, Snackbar } from "@mui/material";

const SettingsCard = () => {
  const [qrCodeStatus, setQrCodeStatus] = useState(false)
  const [copyAlert, setCopyAlert] = useState(false)
  const [QrURL, setQrURL] = useState('')
  const [profileUrl, setProfileUrl] = useState('')
  const userId = localStorage.getItem('id')
  const navigate = useNavigate()

  const submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to logout.',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            const response = await userLogoutAPI(userId)
            if (response.status) {
              localStorage.clear()
              navigate('/login')
            }
          }
        },
        {
          label: 'Cancel',
          // onClick: () => alert('Click No')
        }
      ]
    });
  };

  const handleLogout = () => {
    submit()
  }

  const handleGetLink = async () => {
    setQrCodeStatus(true)
    try {
      const data = await getQrUrlAPI(userId)
      setQrURL(data?.profileQrUrl)
      setProfileUrl(data?.profileUrl)
    } catch (error) {
      console.log(error);
    }
  }
  const qrOnClose = () => {
    setQrURL('')
    setProfileUrl('')
    setQrCodeStatus(false)
  }

  const handleCopyLink = async (url) => {
    await navigator.clipboard.writeText(url);
    setCopyAlert(true)
  };




  return (
    <div>
      <Card>
        <div className="px-4">
          <div className="grid gap-5">
            <div className="flex gap-4  md:w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded" onClick={handleGetLink}>
              <span>
                <QrCodeScannerIcon />
              </span>
              <p className="font-bold hover:underline cursor-pointer">GetLink</p>
            </div>
            {qrCodeStatus &&
              <div>
                <div className=" justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/* {/content/} */}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/* {/header/} */}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Scan QRCode</h3>
                      </div>
                      {/* {/body/}   */}
                      <div>
                        <div className="w-40 flex mx-10 justify-center">
                          <div>
                            {QrURL !== '' ?
                              <img src={QrURL} alt="QrCode" />
                              :
                              <div className="">
                                <img className="relative opacity-10 animate-pulse blur-sm" src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png" alt="" />
                                <div className="absolute top-36 ml-16 ">
                                  <CircularProgress />
                                </div>
                              </div>
                            }
                          </div>
                        </div>
                        <div className="flex gap-2 borer justify-center">
                          <div className="flex gap-2 border my-1 py-1 px-3 rounded-2xl">
                            <div>
                              <input className="w-40 rounded outline-none" value={profileUrl} type="text" readOnly />
                            </div>
                            <div onClick={() => handleCopyLink(profileUrl)}>
                              <ContentCopyIcon />
                              {/* {copyAlert &&
                                <Snackbar
                                  open={copyAlert}
                                  autoHideDuration={6000}
                                  onClose={()=>setCopyAlert(false)}
                                  message="Link copied"
                                  // action={action}

                                />} */}
                              <Snackbar open={copyAlert} autoHideDuration={6000} >
                                <Alert severity="success" sx={{ width: '100%' }}>
                                  This is a success message!
                                </Alert>
                              </Snackbar>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <div>
                          <button
                            className="text-red-500 hover:text-white hover:bg-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={qrOnClose}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </div>
            }
            {/* <div className="flex gap-4  md:w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded">
                    <span>
                      <NotificationsIcon />
                    </span>
                    <p className="font-bold hover:underline cursor-pointer">Notifications</p>
                  </div> */}
            <Link to={'/savedPosts'}>
              <div className="flex gap-4 md:w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded">
                <span>
                  <BookmarkIcon />
                </span>
                <p className="font-bold hover:underline cursor-pointer">Saved</p>
              </div>
            </Link>
            {/* <div className="flex gap-4 md:w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded">
                    <span>
                      <LockIcon />
                    </span>
                    <p className="font-bold hover:underline cursor-pointer">Privacy</p>
                  </div> */}

            {/* <div className="flex gap-4 md:w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded">
                    <span>
                      <InfoIcon />
                    </span>
                    <p className="font-bold hover:underline cursor-pointer">About</p>
                  </div> */}
            <div className="flex gap-4 md:w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded" onClick={handleLogout}>
              <span>
                <LogoutIcon />
              </span>
              <p className="font-bold hover:underline cursor-pointer text-blue-500">Logout</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default SettingsCard